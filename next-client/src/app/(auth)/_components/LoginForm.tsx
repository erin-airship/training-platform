"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from 'next/link';
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { usePostSignIn } from "@/hooks/api/auth/usePostSignIn";
import { usePostSignUp } from "@/hooks/api/auth/usePostSignUp";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters" }),
});

const LoginForm = ({cardTitle = 'Sign In', type = 'signin'}) => {
    const { mutateAsync: login, isLoading } = usePostSignIn();
    const { mutateAsync: register } = usePostSignUp();


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (type === 'signin') {
        await login(values)
    } else {
        await register(values)
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-md p-6">
        <CardHeader>
          <CardTitle className="text-2xl">{cardTitle}</CardTitle>
          <CardDescription>
            Enter your email and password to {cardTitle.toLowerCase()}.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <CardContent className="grid gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="text-right">
                <Link
                  href="/forgot-password"
                  className="text-sm text-blue-500 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="text-right">
                <Link
                  href="/signup"
                  className="text-sm text-blue-500 hover:underline"
                >
                  Sign Up
                </Link>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default LoginForm;
