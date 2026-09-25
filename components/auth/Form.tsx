"use client";

import useStatus from "@/context/Status";
import { useState } from "react";

interface AuthFormProps {
  type: "login" | "register";
}

export default function AuthForm({ type }: AuthFormProps) {
  const [formData, setFormData] = useState<string>(""); // for now
  const { showStatus } = useStatus();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // logic

    showStatus("info", "work in progess");
  };

  return (
    <form onSubmit={handleSubmit}>
      {type === "register" && <></>}
      email password
      {type === "register" && <div>confirm password</div>}
    </form>
  );
}
