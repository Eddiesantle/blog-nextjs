import { Text } from "thon-ui";

export default function MainFooter() {

    const linkClassName = 'text-gray-500 hover:text-gray-800 transition-all duration-200ms ease-in-out'


  return (
    <footer className="flex flex-col lg:flex-row justify-between lg:items-center gap-2 lg:gap-0 pt-4 border-t border-solid border-t-gray-200 mt-12 pb-4">
      <div className="flex flex-col">
        <Text className="text-gray-800 italic font-bold">Eddie!</Text>
        <Text variant="xs" className="text-gray-500">
          wedleys8@gmail.com - provérbios 16:3
        </Text>
      </div>
      <ul className="flex gap-2.5">
        <li><a href="https://www.linkedin.com/in/wedley-santos/" target={"_blank"} rel={"noopener noreferrer"} className={linkClassName}>LinkdIn</a></li>
        <li><a href="https://www.instagram.com/eddiesantle/" target={"_blank"} rel={"noopener noreferrer"} className={linkClassName}>Instagram</a></li>
      <li><a href="tel:+48988128628" target={"_blank"} rel={"noopener noreferrer"} className={linkClassName}>(48)98812-8628</a></li>
      </ul>
    </footer>
  );
}
