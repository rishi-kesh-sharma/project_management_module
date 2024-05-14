import Login from "@/components/page/Login/Login";

interface Props {}

const LoginPage = (props: Props) => {
  console.log(props);
  return (
    <div>
      <Login />
    </div>
  );
};

export default LoginPage;
