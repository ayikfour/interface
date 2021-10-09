import type { FunctionComponent } from "react";
import ButtonBlue from "./ButtonBlue";

// Import button
import ButtonGreyLink from "./ButtonGreyLink";

/**
 * TransactionIsCompletedProps is a React Component properties that passed to React
 * Component Button
 */
type TransactionIsCompletedProps = {
    title: string;
    subTitle: string;
    transactionLink: string;
    onClose: () => void;
};

/**
 * TransactionIsCompleted is just yet another react component
 *
 * @link https://fettblog.eu/typescript-react/components/#functional-components
 */
const TransactionIsCompleted: FunctionComponent<TransactionIsCompletedProps> =
    ({ title, subTitle, transactionLink, onClose }) => {
        return (
            <div className="mx-auto text-center" style={{ width: "480px" }}>
                <div className="inline-block items-center">
                    <svg
                        width="126"
                        height="73"
                        viewBox="0 0 126 73"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M73.8429 24.3411C87.7602 26.2144 94.719 27.1512 94.9794 29.284C95.0069 29.5081 95.0069 29.7344 94.9794 29.9584C94.719 32.0913 87.7604 33.028 73.8433 34.9015C72.1095 35.1349 71.2421 35.2517 70.6229 35.7738C70.5487 35.8363 70.4777 35.9027 70.4105 35.9727C69.8491 36.5567 69.6763 37.4141 69.3307 39.1291L68.4534 43.4817C66.3358 53.9887 65.2769 59.2425 63.0001 59.2425C60.7231 59.2425 59.6643 53.9889 57.5466 43.4818L56.6693 39.1291C56.3237 37.4141 56.1509 36.5567 55.5895 35.9727C55.5224 35.9027 55.4514 35.8363 55.3771 35.7738C54.7579 35.2517 53.8911 35.135 52.1573 34.9016C38.24 33.0281 31.281 32.0913 31.0206 29.9584C30.9931 29.7344 30.9931 29.5081 31.0206 29.284C31.281 27.1512 38.2398 26.2144 52.1573 24.3411C53.8905 24.1076 54.758 23.9907 55.3771 23.4689C55.4514 23.4061 55.5224 23.3397 55.5895 23.2698C56.1509 22.6859 56.3237 21.8284 56.6694 20.1134L57.5466 15.7608C59.6643 5.25374 60.7231 0 63.0001 0C65.2769 0 66.3357 5.25365 68.4534 15.761L69.3307 20.1134C69.6763 21.8284 69.8491 22.6859 70.4105 23.2698C70.4777 23.3397 70.5487 23.4061 70.6229 23.4689C71.242 23.9907 72.1086 24.1075 73.8419 24.3409L73.8429 24.3411Z"
                            fill="#89FF76"
                        />
                        <path
                            d="M113.107 51.7914C121.588 52.9298 125.829 53.499 125.987 54.7951C126.004 54.9312 126.004 55.0688 125.987 55.2049C125.829 56.501 121.588 57.0702 113.108 58.2087C112.051 58.3505 111.523 58.4214 111.145 58.7387C111.1 58.7767 111.057 58.8171 111.016 58.8596C110.674 59.2145 110.568 59.7355 110.358 60.7776L109.823 63.4226C108.533 69.8074 107.887 73 106.5 73C105.113 73 104.467 69.8075 103.177 63.4227L102.642 60.7776C102.432 59.7355 102.326 59.2145 101.984 58.8596C101.943 58.8171 101.9 58.7767 101.855 58.7387C101.477 58.4214 100.949 58.3505 99.8927 58.2087C91.4118 57.0702 87.1712 56.501 87.0125 55.2049C86.9958 55.0688 86.9958 54.9312 87.0125 54.7951C87.1712 53.499 91.4117 52.9298 99.8927 51.7914C100.949 51.6495 101.478 51.5785 101.855 51.2614C101.9 51.2233 101.943 51.1829 101.984 51.1404C102.326 50.7856 102.432 50.2645 102.642 49.2224L103.177 46.5774C104.467 40.1926 105.113 37 106.5 37C107.887 37 108.533 40.1925 109.823 46.5775L110.358 49.2224C110.568 50.2645 110.674 50.7856 111.016 51.1404C111.057 51.1829 111.1 51.2233 111.145 51.2614C111.522 51.5785 112.051 51.6494 113.107 51.7913L113.107 51.7914Z"
                            fill="#89FF76"
                            fillOpacity="0.8"
                        />
                        <path
                            d="M26.1074 51.7914C34.5883 52.9298 38.8288 53.499 38.9875 54.7951C39.0042 54.9312 39.0042 55.0688 38.9875 55.2049C38.8288 56.501 34.5884 57.0702 26.1077 58.2087C25.0511 58.3505 24.5225 58.4214 24.1452 58.7387C24.1 58.7767 24.0567 58.8171 24.0158 58.8596C23.6737 59.2145 23.5684 59.7355 23.3577 60.7776L22.8232 63.4226C21.5327 69.8074 20.8875 73 19.5 73C18.1125 73 17.4673 69.8075 16.1769 63.4227L15.6423 60.7776C15.4316 59.7355 15.3263 59.2145 14.9842 58.8596C14.9433 58.8171 14.9 58.7767 14.8548 58.7387C14.4775 58.4214 13.9493 58.3505 12.8927 58.2087C4.41185 57.0702 0.17121 56.501 0.0125447 55.2049C-0.00418157 55.0688 -0.00418156 54.9312 0.0125447 54.7951C0.171211 53.499 4.41174 52.9298 12.8927 51.7914C13.9489 51.6495 14.4776 51.5785 14.8548 51.2614C14.9 51.2233 14.9433 51.1829 14.9842 51.1404C15.3263 50.7856 15.4316 50.2645 15.6423 49.2224L16.1768 46.5774C17.4673 40.1926 18.1125 37 19.5 37C20.8875 37 21.5327 40.1925 22.8232 46.5775L23.3577 49.2224C23.5684 50.2645 23.6737 50.7856 24.0158 51.1404C24.0567 51.1829 24.1 51.2233 24.1452 51.2614C24.5224 51.5785 25.0506 51.6494 26.1068 51.7913L26.1074 51.7914Z"
                            fill="#89FF76"
                            fillOpacity="0.8"
                        />
                    </svg>
                </div>
                <div className="mt-8">
                    <h1 className="text-white font-extrabold text-4xl m-0 leading-normal">
                        {title}
                    </h1>
                    <p className="text-grey font-semibold text-2xl m-0 leading-normal">
                        {subTitle}
                    </p>
                </div>
                <div className="mt-8">
                    <span className="mr-4">
                        <ButtonGreyLink
                            title="See transaction on explorer"
                            url={transactionLink}
                        />
                    </span>
                    <span>
                        <ButtonBlue onClick={onClose}>Close</ButtonBlue>
                    </span>
                </div>
            </div>
        );
    };

export default TransactionIsCompleted;
