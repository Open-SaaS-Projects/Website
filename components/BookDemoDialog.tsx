"use client";

import { useState, useEffect } from "react";
import { submitDemoRequest } from "@/app/actions/book-demo";
import {
  Dialog,
  DialogOverlay,
  DialogPortal,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BookDemoDialogProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDemoType?: string;
}

export default function BookDemoDialog({
  isOpen,
  onClose,
  selectedDemoType,
}: BookDemoDialogProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    contactEmail: "",
    demoType: selectedDemoType || "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (!formData.contactEmail.trim()) {
      newErrors.contactEmail = "Contact email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactEmail)) {
      newErrors.contactEmail = "Please enter a valid email address";
    }

    if (!formData.demoType) {
      newErrors.demoType = "Please select a demo type";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setFormError(null);
    setSuccessMessage(null);

    try {
      const formDataObj = new FormData();
      formDataObj.append("fullName", formData.fullName);
      formDataObj.append("companyName", formData.companyName);
      formDataObj.append("contactEmail", formData.contactEmail);
      formDataObj.append("demoType", formData.demoType);

      console.log("Submitting demo request with data:", formData);

      const result = await submitDemoRequest(formDataObj);

      console.log("Demo request result:", result);

      if (result.success) {
        setSuccessMessage(
          result.message || "Your demo request has been submitted successfully!"
        );

        // Reset form and close dialog after showing success
        setTimeout(() => {
          setFormData({
            fullName: "",
            companyName: "",
            contactEmail: "",
            demoType: selectedDemoType || "",
          });
          setErrors({});
          setSuccessMessage(null);
          onClose();
        }, 2000);
      } else {
        console.error("Demo request failed:", result.error, result.details);
        setFormError(
          result.error ||
            "An error occurred while submitting your demo request."
        );

        // Show additional details in development
        if (process.env.NODE_ENV === "development" && result.details) {
          setFormError(`${result.error}\n\nDetails: ${result.details}`);
        }
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormError(
        "An unexpected error occurred. Please try again or contact us directly at info@makkn.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  // Set selected demo type when dialog opens
  useEffect(() => {
    if (isOpen) {
      if (selectedDemoType) {
        setFormData((prev) => ({ ...prev, demoType: selectedDemoType }));
      }
      // Small delay to ensure dialog is rendered
      setTimeout(() => {
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }, 100);
    }
  }, [isOpen, selectedDemoType]);

  const handleClose = () => {
    // Clear form state when dialog closes
    setFormData({
      fullName: "",
      companyName: "",
      contactEmail: "",
      demoType: selectedDemoType || "",
    });
    setErrors({});
    setFormError(null);
    setSuccessMessage(null);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Content
          className={cn(
            "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white/30 backdrop-blur-xl p-0 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-xl border-gray-200"
          )}
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          {/* Header */}
          <DialogHeader className="p-6 pb-4">
            <DialogTitle className="text-2xl font-bold text-center text-violet-800">
              Book a Demo
            </DialogTitle>
            <p className="text-gray-700 text-center mt-2">
              Get a personalized demo of our AI solutions
            </p>
          </DialogHeader>

          {/* Error/Success Messages */}
          {formError && (
            <div className="mx-6 mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
              {formError}
            </div>
          )}

          {successMessage && (
            <div className="mx-6 mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-600 text-sm">
              {successMessage}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-6 pb-6">
            <div className="space-y-4">
              {/* Full Name */}
              <div className="pb-4">
                <Label htmlFor="fullName" className="text-sm font-medium">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) =>
                    handleInputChange("fullName", e.target.value)
                  }
                  className={`mt-1 bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:bg-white focus:border-gray-400 shadow-md ${
                    errors.fullName ? "border-red-400" : ""
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Company Name */}
              <div className="pb-4">
                <Label htmlFor="companyName" className="text-sm font-medium">
                  Company Name
                </Label>
                <Input
                  id="companyName"
                  type="text"
                  value={formData.companyName}
                  onChange={(e) =>
                    handleInputChange("companyName", e.target.value)
                  }
                  className={`mt-1 bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:bg-white focus:border-gray-400 shadow-md ${
                    errors.companyName ? "border-red-400" : ""
                  }`}
                  placeholder="Enter your company name"
                />
                {errors.companyName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.companyName}
                  </p>
                )}
              </div>

              {/* Contact Email */}
              <div className="pb-4">
                <Label htmlFor="contactEmail" className="text-sm font-medium">
                  Business Email
                </Label>
                <Input
                  id="contactEmail"
                  type="email"
                  value={formData.contactEmail}
                  onChange={(e) =>
                    handleInputChange("contactEmail", e.target.value)
                  }
                  className={`mt-1 bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:bg-white focus:border-gray-400 shadow-md ${
                    errors.contactEmail ? "border-red-400" : ""
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.contactEmail && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.contactEmail}
                  </p>
                )}
              </div>

              {/* Demo Type Selection */}
              <div>
                <Label className="text-sm font-medium">Demo Type </Label>
                <Select
                  value={formData.demoType}
                  onValueChange={(value) =>
                    handleInputChange("demoType", value)
                  }
                >
                  <SelectTrigger
                    className={`mt-1 bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:bg-white focus:border-gray-400 shadow-md [&>span]:line-clamp-none [&>span]:whitespace-normal [&>span]:text-left [&>span]:pl-0 h-auto min-h-[2.5rem] py-2 ${
                      errors.demoType ? "border-red-400" : ""
                    }`}
                  >
                    <SelectValue placeholder="Select a demo type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem
                      className="border-gray-300 border-b"
                      value="customer-support"
                    >
                      <div>
                        <div className="font-medium">Customer Support</div>
                        <div className="text-sm text-gray-600">
                          Advanced customer support automation
                        </div>
                      </div>
                    </SelectItem>
                    <SelectItem
                      className="border-gray-300 border-b"
                      value="document-intelligence"
                    >
                      <div>
                        <div className="font-medium">Document Intelligence</div>
                        <div className="text-sm text-gray-600">
                          Advanced document processing and analysis
                        </div>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
                {errors.demoType && (
                  <p className="text-red-500 text-xs mt-1">{errors.demoType}</p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                className="flex-1 bg-white/20 backdrop-blur-sm border-[#6320ce] text-[#6320ce] hover:bg-[#6320ce]/10"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-[#6320ce]/80 backdrop-blur-sm hover:bg-[#6320ce]/90 border border-[#6320ce]/30 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Book Demo"}
              </Button>
            </div>
          </form>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}
