import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../../components/ui/card';
import { Label } from '../../components/ui/label';
import { Alert } from '../../components/ui/alert';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { setUserToken } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer some-random-string`,
        },
        body: JSON.stringify({ email, password, role: "trainee" }),
      });


      if (!response.ok) {
        console.log("response is not okay")
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to sign up");
      }

      const data = await response.json();
      const token = data.accessToken;
      if (token) {
        setUserToken(token);
        navigate("/");
      }
    } catch (err) {
      setError(err.message || "An error occurred");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
      </CardHeader>
      <CardContent>
      <form onSubmit={handleSubmit}>
          {error && <Alert variant="destructive">{error}</Alert>}
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          <Button type="submit" fullWidth>
            Sign Up
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        <p>Already have an account? <a href="/login">Log In</a></p>
      </CardFooter>
    </Card>
  );
};

export default SignUp;
