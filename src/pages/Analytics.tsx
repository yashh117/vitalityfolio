import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/ui/navigation";
import ChatBot from "@/components/ui/chat-bot";
import { 
  BarChart3, 
  TrendingUp, 
  Activity, 
  Heart,
  Calendar,
  Award
} from "lucide-react";

const Analytics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ChatBot />
      
      <main className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Health{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Analytics
              </span>
            </h1>
            <p className="text-muted-foreground">
              Detailed insights into your health and wellness journey.
            </p>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="trends">Trends</TabsTrigger>
              <TabsTrigger value="activities">Activities</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-gradient-to-br from-card to-card/80">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Avg Heart Rate</CardTitle>
                    <Heart className="h-4 w-4 text-red-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">74 BPM</div>
                    <p className="text-xs text-green-600">↓ 2% from last week</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-card to-card/80">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Daily Steps</CardTitle>
                    <Activity className="h-4 w-4 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">9,247</div>
                    <p className="text-xs text-green-600">↑ 12% from last week</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-card to-card/80">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Workouts</CardTitle>
                    <Award className="h-4 w-4 text-orange-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">18</div>
                    <p className="text-xs text-green-600">This month</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-card to-card/80">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Calories Burned</CardTitle>
                    <TrendingUp className="h-4 w-4 text-blue-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2,847</div>
                    <p className="text-xs text-green-600">Today</p>
                  </CardContent>
                </Card>
              </div>

              {/* Charts Placeholder */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-card to-card/80">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="mr-2 h-5 w-5 text-primary" />
                      Weekly Activity Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
                      <div className="text-center">
                        <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground">Chart visualization would appear here</p>
                        <p className="text-sm text-muted-foreground">Steps, calories, and activity data</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-card to-card/80">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Heart className="mr-2 h-5 w-5 text-red-500" />
                      Heart Rate Trends
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
                      <div className="text-center">
                        <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground">Heart rate trend chart</p>
                        <p className="text-sm text-muted-foreground">Resting, active, and recovery rates</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Health Insights */}
              <Card className="bg-gradient-to-br from-card to-card/80">
                <CardHeader>
                  <CardTitle>AI Health Insights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <h4 className="font-semibold text-primary mb-2">🎯 Great Progress!</h4>
                    <p className="text-sm text-muted-foreground">
                      You've consistently exceeded your daily step goal for the past 5 days. Your cardiovascular health is showing excellent improvement.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <h4 className="font-semibold text-blue-600 mb-2">💧 Hydration Reminder</h4>
                    <p className="text-sm text-muted-foreground">
                      Your water intake has been slightly below target this week. Consider setting hourly reminders to stay properly hydrated.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-orange-500/10 rounded-lg border border-orange-500/20">
                    <h4 className="font-semibold text-orange-600 mb-2">🏃‍♂️ Activity Suggestion</h4>
                    <p className="text-sm text-muted-foreground">
                      Based on your recent activity patterns, try adding 15 minutes of strength training to your routine for balanced fitness.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="trends" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-card to-card/80">
                  <CardHeader>
                    <CardTitle>30-Day Trends</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                        <span className="font-medium">Average Steps</span>
                        <div className="text-right">
                          <div className="font-bold">9,247</div>
                          <div className="text-sm text-green-600">↑ 12%</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                        <span className="font-medium">Heart Rate</span>
                        <div className="text-right">
                          <div className="font-bold">74 BPM</div>
                          <div className="text-sm text-green-600">↓ 2%</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                        <span className="font-medium">Sleep Quality</span>
                        <div className="text-right">
                          <div className="font-bold">8.2/10</div>
                          <div className="text-sm text-green-600">↑ 5%</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-card to-card/80">
                  <CardHeader>
                    <CardTitle>Health Score Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Cardiovascular</span>
                          <span className="text-sm">92/100</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Activity Level</span>
                          <span className="text-sm">88/100</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Sleep Quality</span>
                          <span className="text-sm">85/100</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Overall Health</span>
                          <span className="text-sm">89/100</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '89%' }}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="activities" className="space-y-6">
              <Card className="bg-gradient-to-br from-card to-card/80">
                <CardHeader>
                  <CardTitle>Activity Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-muted/20 rounded-lg">
                        <div className="text-2xl font-bold text-primary">18</div>
                        <div className="text-sm text-muted-foreground">Workouts This Month</div>
                      </div>
                      <div className="text-center p-4 bg-muted/20 rounded-lg">
                        <div className="text-2xl font-bold text-orange-500">47</div>
                        <div className="text-sm text-muted-foreground">Hours Active</div>
                      </div>
                      <div className="text-center p-4 bg-muted/20 rounded-lg">
                        <div className="text-2xl font-bold text-blue-500">5,240</div>
                        <div className="text-sm text-muted-foreground">Calories Burned</div>
                      </div>
                    </div>

                    <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
                      <div className="text-center">
                        <Activity className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground">Activity breakdown chart</p>
                        <p className="text-sm text-muted-foreground">Cardio, strength, flexibility analysis</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reports" className="space-y-6">
              <Card className="bg-gradient-to-br from-card to-card/80">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-primary" />
                    Health Reports
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border border-border rounded-lg hover:bg-muted/20 transition-colors cursor-pointer">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold">Monthly Health Summary</h4>
                        <p className="text-sm text-muted-foreground">Complete overview of your health metrics</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">December 2024</div>
                        <div className="text-sm text-primary">Download PDF</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border border-border rounded-lg hover:bg-muted/20 transition-colors cursor-pointer">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold">Fitness Progress Report</h4>
                        <p className="text-sm text-muted-foreground">Detailed activity and workout analysis</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Last 30 days</div>
                        <div className="text-sm text-primary">Download PDF</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border border-border rounded-lg hover:bg-muted/20 transition-colors cursor-pointer">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold">Vitals Tracking Report</h4>
                        <p className="text-sm text-muted-foreground">Heart rate, blood pressure, and vital signs</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Weekly</div>
                        <div className="text-sm text-primary">Download PDF</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Analytics;