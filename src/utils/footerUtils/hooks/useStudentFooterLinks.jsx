import { guidesURL } from "@/constants/urls";
import { useUserData } from "@/context/userContext";

const useStudentFooterLinks = () => {
  const { currentUser } = useUserData();

  return [
    {
      label: "Guías de Laboratorio",
      href: guidesURL,
    },
    {
      label: "Mis reservas Equipos",
      href: "",
    },
    {
      label: "Mis reservas Reactivos",
      href: {
        pathname: "/student-reagent-request",
        query: { username: currentUser?.email.split("@")[0] },
      },
    },
    {
      label: "Mis reservas Espacios",
      href: "",
    },
  ];
};

export default useStudentFooterLinks;
