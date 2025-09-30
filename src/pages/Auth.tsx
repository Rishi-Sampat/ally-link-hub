import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap } from "lucide-react";

export default function Auth() {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode") || "login";
  const [activeTab, setActiveTab] = useState(mode === "signup" ? "signup" : "login");

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-primary">
            <GraduationCap className="h-7 w-7 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            AllyConnect
          </span>
        </Link>

        <Card className="border-2 shadow-custom-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Welcome Back</CardTitle>
            <CardDescription className="text-center">
              Choose your role to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="alumni">Alumni</TabsTrigger>
                <TabsTrigger value="student">Student</TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>
                <Button className="w-full gradient-primary">
                  Sign In
                </Button>
                <div className="text-center text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <button
                    onClick={() => setActiveTab("alumni")}
                    className="text-primary hover:underline"
                  >
                    Sign up
                  </button>
                </div>
              </TabsContent>

              <TabsContent value="alumni" className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="alumni-name">Full Name</Label>
                  <Input id="alumni-name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="alumni-phone">Phone Number</Label>
                  <Input id="alumni-phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="alumni-email">Email</Label>
                  <Input id="alumni-email" type="email" placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="alumni-password">Password</Label>
                  <Input id="alumni-password" type="password" placeholder="••••••••" />
                </div>
                <Button className="w-full gradient-primary">
                  Send OTP
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  We'll verify your phone number with an OTP
                </p>
              </TabsContent>

              <TabsContent value="student" className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="student-name">Full Name</Label>
                  <Input id="student-name" placeholder="Jane Smith" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="student-email">College Email</Label>
                  <Input id="student-email" type="email" placeholder="jane@university.edu" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="enrollment">Enrollment Number</Label>
                  <Input id="enrollment" placeholder="2024CS123" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="student-password">Password</Label>
                  <Input id="student-password" type="password" placeholder="••••••••" />
                </div>
                <Button className="w-full gradient-primary">
                  Register
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  We'll verify your enrollment details
                </p>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
                ← Back to home
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}