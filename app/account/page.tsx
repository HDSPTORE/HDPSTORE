"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff, Save, Edit } from "lucide-react"
import Navigation from "@/components/navigation"

export default function AccountDetailsPage() {
  const [isEditing, setIsEditing] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isChangingPassword, setIsChangingPassword] = useState(false)

  const [formData, setFormData] = useState({
    fullName: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: "+60123456789",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSaveChanges = () => {
    // Add save logic here
    setIsEditing(false)
    setIsChangingPassword(false)
    // Reset password fields
    setFormData((prev) => ({
      ...prev,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    }))
  }

  const handleCancel = () => {
    setIsEditing(false)
    setIsChangingPassword(false)
    // Reset form data to original values
    setFormData({
      fullName: "John Doe",
      email: "john.doe@example.com",
      phoneNumber: "+60123456789",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-black">
      <Navigation />

      <div className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Account Details</h1>
            <p className="text-gray-400">Manage your personal information and security settings</p>
          </div>

          <Card className="bg-gradient-to-b from-gray-900/90 to-black/90 border-slate-700 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl text-white">Personal Information</CardTitle>
              {!isEditing && (
                <Button
                  onClick={() => setIsEditing(true)}
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-white hover:bg-white/10 bg-transparent"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </Button>
              )}
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-gray-300">
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    disabled={!isEditing}
                    className="bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 disabled:opacity-70"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    disabled={!isEditing}
                    className="bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 disabled:opacity-70"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phoneNumber" className="text-gray-300">
                    Phone Number
                  </Label>
                  <Input
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                    disabled={!isEditing}
                    className="bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 disabled:opacity-70"
                  />
                </div>
              </div>

              {isEditing && (
                <div className="border-t border-slate-700 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Change Password</h3>
                    <Button
                      onClick={() => setIsChangingPassword(!isChangingPassword)}
                      variant="ghost"
                      size="sm"
                      className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
                    >
                      {isChangingPassword ? "Cancel" : "Change Password"}
                    </Button>
                  </div>

                  {isChangingPassword && (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword" className="text-gray-300">
                          Current Password
                        </Label>
                        <div className="relative">
                          <Input
                            id="currentPassword"
                            type={showPassword ? "text" : "password"}
                            value={formData.currentPassword}
                            onChange={(e) => handleInputChange("currentPassword", e.target.value)}
                            className="bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 pr-10"
                            placeholder="Enter current password"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-white"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="newPassword" className="text-gray-300">
                          New Password
                        </Label>
                        <div className="relative">
                          <Input
                            id="newPassword"
                            type={showNewPassword ? "text" : "password"}
                            value={formData.newPassword}
                            onChange={(e) => handleInputChange("newPassword", e.target.value)}
                            className="bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 pr-10"
                            placeholder="Enter new password"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-white"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                          >
                            {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword" className="text-gray-300">
                          Confirm New Password
                        </Label>
                        <div className="relative">
                          <Input
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            value={formData.confirmPassword}
                            onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                            className="bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 pr-10"
                            placeholder="Confirm new password"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-white"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {isEditing && (
                <div className="flex gap-3 pt-4">
                  <Button onClick={handleSaveChanges} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                  <Button
                    onClick={handleCancel}
                    variant="outline"
                    className="flex-1 border-slate-600 text-white hover:bg-white/10 bg-transparent"
                  >
                    Cancel
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
