"use client";

import { useForm } from "react-hook-form";
import DynamicForm, { DynamicFormField } from "@/components/layouts/form";
import useUserInfo from "@/store/authenticate";
import Avatar from "@/components/layouts/avatar";
import { profileSchema } from "@/config/validation";
import { zodResolver } from "@hookform/resolvers/zod";

const fields: DynamicFormField[] = [
  { type: "text", label: "Name", field: "name", required: true },
  { type: "email", label: "Email", field: "email" },
  { type: "textarea", label: "Bio", field: "bio" },
];

export default function DemoPage() {
  const { user, setUserInfo } = useUserInfo((state) => state);
  const form = useForm({
    defaultValues: {
      name: user?.name,
      email: user?.email,
      bio: user?.bio,
    },
    resolver: zodResolver(profileSchema),
  });

  const onSubmit = (data: UserInfo) => {
    setUserInfo({ ...user, ...data });
  };

  return (
    <div>
      <Avatar className="w-24 h-24 mb-6" src={user?.avatar} />
      <DynamicForm fields={fields} formInstance={form} onSubmit={onSubmit} />
    </div>
  );
}
