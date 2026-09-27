import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/ui/navigation";
import ChatBot from "@/components/ui/chat-bot";
import { 
  Heart, 
  Activity, 
  Target, 
  TrendingUp, 
  Calendar,
  Plus,
  Zap,
  Droplets,
  Moon
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const { toast } = useToast();
  const [heartRate, setHeartRate] = useState("72");
  const [bloodPressure, setBloodPressure] = useState("120/80");
  const [weight, setWeight] = useState("70");
  const [steps, setSteps] = useState("8,524");
  const [waterIntake, setWaterIntake] = useState(6);
  const [sleepHours, setSleepHours] = useState(7.5);

  const handleSaveVitals = () => {
    // Simulate saving data
    toast({
      title: "Vitals Saved Successfully!",
      description: "Your health data has been updated.",
    });
  };

  const handleAddActivity = () => {
    toast({
      title: "Activity Added!",
      description: "New workout session recorded.",
    });
  };

  const handleSetNewGoal = () => {
    toast({
      title: "Goal Created!",
      description: "Your new health goal has been added to your dashboard.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ChatBot />
      
      <main className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Welcome back to your{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Health Dashboard
              </span>
            </h1>
            <p className="text-muted-foreground">
              Track your wellness journey and achieve your health goals.
            </p>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="vitals">Vitals</TabsTrigger>
              <TabsTrigger value="activities">Activities</TabsTrigger>
              <TabsTrigger value="goals">Goals</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-gradient-to-br from-card to-card/80">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Heart Rate</CardTitle>
                    <Heart className="h-4 w-4 text-red-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{heartRate} BPM</div>
                    <p className="text-xs text-muted-foreground">Normal range</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-card to-card/80">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Steps Today</CardTitle>
                    <Activity className="h-4 w-4 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{steps}</div>
                    <p className="text-xs text-muted-foreground">Goal: 10,000</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-card to-card/80">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Water Intake</CardTitle>
                    <Droplets className="h-4 w-4 text-blue-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{waterIntake}/8 glasses</div>
                    <p className="text-xs text-muted-foreground">Stay hydrated!</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-card to-card/80">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Sleep</CardTitle>
                    <Moon className="h-4 w-4 text-purple-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{sleepHours}h</div>
                    <p className="text-xs text-muted-foreground">Last night</p>
                  </CardContent>
                </Card>
              </div>

              {/* Progress Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-card to-card/80">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                      Daily Goals Progress
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Steps</span>
                        <span className="text-sm">8,524 / 10,000</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Water</span>
                        <span className="text-sm">6 / 8 glasses</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Sleep</span>
                        <span className="text-sm">7.5 / 8 hours</span>
                      </div>
                      <Progress value={94} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-card to-card/80">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="mr-2 h-5 w-5 text-primary" />
                      Recent Activities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Morning Run</p>
                          <p className="text-xs text-muted-foreground">5.2 km • 28 minutes</p>
                        </div>
                        <span className="text-xs text-muted-foreground">2h ago</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Water Intake</p>
                          <p className="text-xs text-muted-foreground">500ml logged</p>
                        </div>
                        <span className="text-xs text-muted-foreground">1h ago</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Vitals Updated</p>
                          <p className="text-xs text-muted-foreground">Heart rate: 72 BPM</p>
                        </div>
                        <span className="text-xs text-muted-foreground">3h ago</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="vitals" className="space-y-6">
              <Card className="bg-gradient-to-br from-card to-card/80">
                <CardHeader>
                  <CardTitle>Update Your Vitals</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="heartRate">Heart Rate (BPM)</Label>
                      <Input
                        id="heartRate"
                        value={heartRate}
                        onChange={(e) => setHeartRate(e.target.value)}
                        placeholder="Enter heart rate"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bloodPressure">Blood Pressure</Label>
                      <Input
                        id="bloodPressure"
                        value={bloodPressure}
                        onChange={(e) => setBloodPressure(e.target.value)}
                        placeholder="120/80"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="weight">Weight (kg)</Label>
                      <Input
                        id="weight"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="Enter weight"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="steps">Steps Today</Label>
                      <Input
                        id="steps"
                        value={steps}
                        onChange={(e) => setSteps(e.target.value)}
                        placeholder="Enter steps"
                      />
                    </div>
                  </div>
                  <Button onClick={handleSaveVitals} className="w-full" variant="primary">
                    Save Vitals
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activities" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Activities</h2>
                <Button onClick={handleAddActivity} variant="primary">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Activity
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-card to-card/80">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="mr-2 h-5 w-5 text-orange-500" />
                      Cardio Workout
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">Duration: 45 minutes</p>
                    <p className="text-sm text-muted-foreground mb-2">Calories: 320</p>
                    <p className="text-sm text-muted-foreground">Intensity: High</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-card to-card/80">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Activity className="mr-2 h-5 w-5 text-blue-500" />
                      Strength Training
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">Duration: 60 minutes</p>
                    <p className="text-sm text-muted-foreground mb-2">Calories: 280</p>
                    <p className="text-sm text-muted-foreground">Intensity: Medium</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-card to-card/80">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Heart className="mr-2 h-5 w-5 text-green-500" />
                      Yoga Session
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">Duration: 30 minutes</p>
                    <p className="text-sm text-muted-foreground mb-2">Calories: 120</p>
                    <p className="text-sm text-muted-foreground">Intensity: Low</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="goals" className="space-y-6">
              <Card className="bg-gradient-to-br from-card to-card/80">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="mr-2 h-5 w-5 text-primary" />
                    Health Goals
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Daily Steps Goal</span>
                        <span className="text-sm text-muted-foreground">8,524 / 10,000</span>
                      </div>
                      <Progress value={85} className="h-3" />
                      <p className="text-sm text-muted-foreground mt-1">1,476 steps to go!</p>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Weight Loss Goal</span>
                        <span className="text-sm text-muted-foreground">3kg / 5kg</span>
                      </div>
                      <Progress value={60} className="h-3" />
                      <p className="text-sm text-muted-foreground mt-1">Great progress! Keep it up!</p>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Weekly Workout Goal</span>
                        <span className="text-sm text-muted-foreground">4 / 5 sessions</span>
                      </div>
                      <Progress value={80} className="h-3" />
                      <p className="text-sm text-muted-foreground mt-1">1 more workout this week!</p>
                    </div>
                  </div>

                  <Button variant="primary" className="w-full" onClick={handleSetNewGoal}>
                    Set New Goal
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;