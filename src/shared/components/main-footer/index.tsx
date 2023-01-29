import { Text } from "thon-ui";

export default function MainFooter() {

    const linkClassName = 'text-gray-500 hover:text-gray-800 transition-all duration-200ms ease-in-out'


  return (
    <footer className="flex flex-col lg:flex-row justify-between lg:items-center gap-2 lg:gap-0 pt-4 border-t border-solid border-t-gray-200 mt-12 pb-4">
      <div className="flex flex-col">
        <Text className="text-gray-800 italic font-bold">Gust!</Text>
        <Text variant="xs" className="text-gray-500">
          Tudobom@gmais.io - salomão24
        </Text>
      </div>
      <ul className="flex gap-2.5">
        <li><a href="#" target={"_blank"} rel={"noopener noreferrer"} className={linkClassName}>YouTube</a></li>
        <li><a href="#" target={"_blank"} rel={"noopener noreferrer"} className={linkClassName}>Twitter</a></li>
        <li><a href="#" target={"_blank"} rel={"noopener noreferrer"} className={linkClassName}>LinkdIn</a></li>
        <li><a href="#" target={"_blank"} rel={"noopener noreferrer"} className={linkClassName}>Instagram</a></li>
      </ul>
    </footer>
  );
}
