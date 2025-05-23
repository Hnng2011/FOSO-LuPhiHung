import { useForm, Control, UseFormReturn, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodSchema, ZodTypeDef } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/layouts/button";

type FieldType =
  | "text"
  | "email"
  | "textarea"
  | "number"
  | "password"
  | "image";

export interface DynamicFormField {
  type: FieldType;
  label: string;
  field: string;
  placeholder?: string;
  required?: boolean;
}

interface DynamicFormProps {
  fields: DynamicFormField[];
  initialValues?: Record<string, any>;
  onSubmit?: (values: Record<string, any>) => void;
  control?: Control<any>;
  formInstance?: UseFormReturn<any>;
  zodSchema?: ZodSchema<any, ZodTypeDef, any>; // <-- thêm dòng này
}

export default function DynamicForm({
  fields,
  initialValues = {},
  onSubmit,
  control,
  formInstance,
  zodSchema,
}: DynamicFormProps) {
  const defaultForm = useForm({
    defaultValues: initialValues,
    resolver: zodSchema ? zodResolver(zodSchema) : undefined,
  });
  const form = formInstance ?? defaultForm;
  const usedControl = control ?? form.control;

  const handleSubmit = (values: any) => {
    onSubmit?.(values);
  };

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-4"
          autoComplete="off"
        >
          {fields.map((f) => (
            <FormField
              key={f.field}
              control={usedControl}
              name={f.field}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {f.label}
                    {f.required && <span className="text-destructive"> *</span>}
                  </FormLabel>
                  <FormControl>
                    {f.type === "textarea" ? (
                      <Textarea
                        {...field}
                        placeholder={f.placeholder}
                        rows={3}
                      />
                    ) : (
                      <Input
                        {...field}
                        type={f.type}
                        placeholder={f.placeholder}
                      />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </FormProvider>
  );
}
