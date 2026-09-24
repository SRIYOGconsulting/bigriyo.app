import AuthForm from "@/components/auth/Form";

export default function RegisterPage() {
  return (
    <>
      <div className="hidden md:block">some branding stuff on left</div>
      <AuthForm type="register" />
    </>
  );
}
