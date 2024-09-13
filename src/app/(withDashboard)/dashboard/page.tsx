import { authOptions } from "@/utils/authOptions";
import { getServerSession, type Session } from "next-auth";
import Image from "next/image";

type DashboardPageProps = {
  session: Session | null;
};

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <>
      {session?.user && (
        <div>
          <h1 className="text-4xl text-center mt-10">
            Welcome {session?.user?.name}
          </h1>
          {session?.user?.image && (
            <Image
              src={session.user.image}
              width={300}
              height={300}
              className="mx-auto rounded-full mt-5"
              alt={`${session?.user?.name}'s Image`}
            />
          )}
        </div>
      )}
    </>
  );
};

export default DashboardPage;
