import type { FunctionComponent } from "react";
import Link from "next/link";

// Import components
import Logo from "../Logo";
import ButtonThemeSwitcher from "../Buttons/ThemeSwitcher";
import ButtonLaunchBasic from "../Buttons/LaunchBasic";

/**
 * NavigationProps is a React Component properties that passed to React Component Navigation
 */
type NavigationProps = {};

/**
 * Navigation is just yet another react component
 *
 * @link https://fettblog.eu/typescript-react/components/#functional-components
 */
const Navigation: FunctionComponent<NavigationProps> = ({}) => {
    return (
        <div className="flex flex-row p-4 items-center justify-between">
            <div className="flex-none md:w-[162.8px]">
                <Link href="/">
                    <a>
                        <Logo />
                        <span className="text-base font-inter font-bold pl-2 traking-tight text-gray-light-12 dark:text-gray-light-1 self-center leading-0">Risedle</span>
                    </a>
                </Link>
            </div>
            <div className="hidden sm:block flex-none flex flex-row space-x-4 text-center">
                <Link href="https://twitter.com/risedle">
                    <a className="text-sm text-gray-light-12 dark:text-gray-dark-12 sm:self-center">Docs &#8599;</a>
                </Link>
                <Link href="https://discord.com/invite/YCSCd97SXj">
                    <a className="text-sm text-gray-light-12 dark:text-gray-dark-12 sm:self-center">Blog &#8599;</a>
                </Link>
                <Link href="https://github.com/risedle">
                    <a className="text-sm text-gray-light-12 dark:text-gray-dark-12 sm:self-center">Communities</a>
                </Link>
                <Link href="https://github.com/risedle">
                    <a className="text-sm text-gray-light-12 dark:text-gray-dark-12 sm:self-center">Resources</a>
                </Link>
                <Link href="https://github.com/risedle">
                    <a className="text-sm text-gray-light-12 dark:text-gray-dark-12 sm:self-center">About</a>
                </Link>
            </div>
            <div className="flex-none flex flex-row text-right space-x-2">
                <div>
                    <ButtonLaunchBasic />
                </div>
                <div>
                    <ButtonThemeSwitcher />
                </div>
            </div>
        </div>
    );
};

export default Navigation;
