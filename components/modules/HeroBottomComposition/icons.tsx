// Inline icon set for HeroBottomComposition -- ported 1:1 from the Figma
// node's exported icon SVGs (node 69:4360 and descendants) so the
// composition needs no raster/image assets at all. Each icon keeps its
// source viewBox and stroke paths; only fill/stroke="currentColor" was
// substituted in for the source's hardcoded white/color so icons can be
// tinted via className where the design calls for it.

export function LogoMarkIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 52.2738 52.2738" fill="none" className={className}>
      <path
        d="M40.1953 28.1918C41.0921 28.1918 41.819 28.9278 41.819 29.8357V36.1376C41.819 37.0456 41.0921 37.7816 40.1953 37.7816H33.9711C33.0743 37.7816 32.3474 37.0456 32.3474 36.1376V29.8357C32.3474 28.9278 33.0743 28.1918 33.9711 28.1918L40.1953 28.1918Z"
        fill="#2563EB"
      />
      <path
        d="M40.195 14.4922C41.0917 14.4922 41.8189 15.2279 41.819 16.1358V22.4376C41.819 23.3455 41.0918 24.0818 40.195 24.0818H26.346C23.9452 24.1961 19.9452 27.8718 19.9452 30.9279C19.9452 31.0457 19.9379 31.1485 19.9262 31.2377V36.1378C19.9261 37.0456 19.1995 37.7813 18.3029 37.7814H12.0787C11.182 37.7814 10.4549 37.0457 10.4548 36.1378V29.836C10.4548 28.9281 11.182 28.1918 12.0787 28.1918H17.2408C17.2405 28.1904 17.2398 28.1891 17.2395 28.1878C19.2338 28.1876 22.8663 24.8659 22.8663 21.8368L22.8755 21.8421V16.1358C22.8756 15.2279 23.6028 14.4922 24.4995 14.4922H40.195Z"
        fill="#2563EB"
      />
    </svg>
  );
}

export function SparkleIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 18.2958 18.2958"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.30684"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9.63511 16.597C9.77196 16.4833 9.86476 16.3254 9.89742 16.1505C10.1603 14.5874 10.9039 13.1451 12.0246 12.0244C13.1454 10.9036 14.5877 10.16 16.1508 9.89713C16.3257 9.86446 16.4836 9.77167 16.5973 9.63481C16.7109 9.49796 16.7731 9.32566 16.7731 9.14776C16.7731 8.96986 16.7109 8.79756 16.5973 8.66071C16.4836 8.52385 16.3257 8.43106 16.1508 8.39839C14.5877 8.13551 13.1454 7.39195 12.0246 6.27117C10.9039 5.15038 10.1603 3.70811 9.89742 2.14503C9.86476 1.97016 9.77196 1.81221 9.63511 1.69855C9.49825 1.58489 9.32595 1.52267 9.14806 1.52267C8.97016 1.52267 8.79786 1.58489 8.661 1.69855C8.52415 1.81221 8.43135 1.97016 8.39869 2.14503C8.13581 3.70811 7.39225 5.15038 6.27146 6.27117C5.15068 7.39195 3.70841 8.13551 2.14533 8.39839C1.97045 8.43106 1.81251 8.52385 1.69885 8.66071C1.58519 8.79756 1.52297 8.96986 1.52297 9.14776C1.52297 9.32566 1.58519 9.49796 1.69885 9.63481C1.81251 9.77167 1.97045 9.86446 2.14533 9.89713C3.70841 10.16 5.15068 10.9036 6.27146 12.0244C7.39225 13.1451 8.13581 14.5874 8.39869 16.1505C8.43135 16.3254 8.52415 16.4833 8.661 16.597C8.79786 16.7106 8.97016 16.7728 9.14806 16.7728C9.32595 16.7728 9.49825 16.7106 9.63511 16.597Z" />
    </svg>
  );
}

export function CommentIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 18.2958 18.2958"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.30684"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16.7701 12.959C16.7701 13.3634 16.6095 13.7512 16.3236 14.0371C16.0376 14.323 15.6498 14.4837 15.2455 14.4837H5.20412C4.79979 14.4837 4.41205 14.6444 4.12619 14.9304L2.44755 16.609C2.37185 16.6847 2.27542 16.7362 2.17043 16.7571C2.06545 16.778 1.95663 16.7673 1.85774 16.7263C1.75885 16.6854 1.67432 16.616 1.61485 16.527C1.55537 16.438 1.52362 16.3334 1.52361 16.2263L1.52361 3.8111C1.52361 3.40674 1.68424 3.01894 1.97017 2.73301C2.2561 2.44708 2.6439 2.28645 3.04826 2.28645L15.2455 2.28645C15.6498 2.28645 16.0376 2.44708 16.3236 2.73301C16.6095 3.01894 16.7701 3.40674 16.7701 3.8111V12.959Z" />
    </svg>
  );
}

export function PencilIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 18.2958 18.2958"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.30684"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9.90781 16.0098H16.0064" />
      <path d="M16.1403 5.19345C16.5434 4.7905 16.7698 4.24395 16.7699 3.67402C16.77 3.10409 16.5436 2.55748 16.1407 2.15444C15.7377 1.75139 15.1912 1.52492 14.6213 1.52484C14.0513 1.52477 13.5047 1.75111 13.1017 2.15405L2.92768 12.3303C2.75068 12.5068 2.61978 12.7241 2.54651 12.9631L1.53948 16.2807C1.51978 16.3466 1.51829 16.4167 1.53517 16.4834C1.55206 16.5501 1.58668 16.611 1.63538 16.6596C1.68407 16.7082 1.74502 16.7427 1.81175 16.7595C1.87848 16.7763 1.94851 16.7747 2.01441 16.7549L5.33282 15.7486C5.57155 15.676 5.78882 15.5459 5.96555 15.3697L16.1403 5.19345Z" />
    </svg>
  );
}

export function UndoIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 18.2958 18.2958"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.30684"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6.86321 9.91193H2.28925L2.28925 5.33797M2.28925 9.91193L4.57623 7.85365C5.83319 6.72629 7.46173 6.10202 9.15019 6.1003C10.9698 6.1003 12.7149 6.82314 14.0016 8.10982C15.2883 9.39649 16.0111 11.1416 16.0111 12.9612" />
    </svg>
  );
}

export function RedoIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 18.2958 18.2958"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.30684"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6.86235 9.91097H2.28839L2.28839 5.33702M2.28839 9.91097L4.57537 7.85269C5.83233 6.72533 7.46087 6.10106 9.14932 6.09934C10.969 6.09934 12.7141 6.82219 14.0007 8.10886C15.2874 9.39554 16.0103 11.1406 16.0103 12.9603" />
    </svg>
  );
}

export function ChevronDownIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 18.2958 18.2958"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.30684"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4.57382 6.86169L9.14778 11.4356L13.7217 6.86169" />
    </svg>
  );
}

export function MinusIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 18.2958 18.2958"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.30684"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3.81216 9.14823H14.4847" />
    </svg>
  );
}

export function PlusIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 18.2958 18.2958"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.30684"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3.81297 9.14919H14.4855" />
      <path d="M9.14695 3.81234V14.4849" />
    </svg>
  );
}

export function BoldIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 18.2958 18.2958"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.30684"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4.57413 9.14813H11.4351C12.2438 9.14813 13.0194 9.46939 13.5912 10.0412C14.1631 10.6131 14.4844 11.3887 14.4844 12.1974C14.4844 13.0062 14.1631 13.7818 13.5912 14.3536C13.0194 14.9255 12.2438 15.2467 11.4351 15.2467H5.33646C5.13428 15.2467 4.94038 15.1664 4.79741 15.0235C4.65445 14.8805 4.57413 14.6866 4.57413 14.4844V3.81185C4.57413 3.60967 4.65445 3.41577 4.79741 3.2728C4.94038 3.12984 5.13428 3.04952 5.33646 3.04952H10.6727C11.4815 3.04952 12.2571 3.37079 12.8289 3.94264C13.4008 4.5145 13.722 5.2901 13.722 6.09883C13.722 6.90755 13.4008 7.68315 12.8289 8.25501C12.2571 8.82686 11.4815 9.14813 10.6727 9.14813" />
    </svg>
  );
}

export function ItalicIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 18.2958 18.2958"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.30684"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M14.4825 3.04857H7.62156" />
      <path d="M10.6684 15.2469H3.80748" />
      <path d="M11.4337 3.04857L6.8597 15.2458" />
    </svg>
  );
}

export function UnderlineIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 18.2958 18.2958"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.30684"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4.57506 3.04857V7.62252C4.57506 8.83561 5.05696 9.99901 5.91474 10.8568C6.77252 11.7146 7.93593 12.1965 9.14901 12.1965C10.3621 12.1965 11.5255 11.7146 12.3833 10.8568C13.2411 9.99901 13.723 8.83561 13.723 7.62252V3.04857" />
      <path d="M3.05038 15.2469H15.2476" />
    </svg>
  );
}

export function TextColorIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 18.2958 18.2958"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.30684"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3.05035 15.2469H15.2476" />
      <path d="M4.57502 12.1965L9.14898 3.04857L13.7229 12.1965" />
      <path d="M6.10066 9.14919H12.1993" />
    </svg>
  );
}

export function ResetIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 18.2958 18.2958"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.30684"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9.15011 5.33606V9.14769L12.1994 10.6723" />
      <path d="M12.1976 6.09833H16.0092V2.28671" />
      <path d="M16.0105 6.09833L14.2571 4.34498C12.8831 3.0269 11.0536 2.28963 9.14952 2.28671C7.79256 2.28671 6.46607 2.68909 5.33779 3.44298C4.20952 4.19687 3.33014 5.2684 2.81085 6.52207C2.29156 7.77574 2.15569 9.15525 2.42042 10.4861C2.68515 11.817 3.33859 13.0395 4.29811 13.9991C5.25763 14.9586 6.48013 15.612 7.81102 15.8767C9.14191 16.1415 10.5214 16.0056 11.7751 15.4863C13.0288 14.967 14.1003 14.0876 14.8542 12.9594C15.6081 11.8311 16.0105 10.5046 16.0105 9.14764" />
    </svg>
  );
}

export function SettingsIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 18.2958 18.2958"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.30684"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7.62259 3.81329H2.28631" />
      <path d="M9.14724 14.4841H2.28631" />
      <path d="M10.6706 2.28862V5.33792" />
      <path d="M12.1962 12.9594V16.0087" />
      <path d="M16.0088 9.14919H9.14783" />
      <path d="M16.0079 14.4851H12.1962" />
      <path d="M16.0078 3.81234H10.6716" />
      <path d="M6.09561 7.62355V10.6729" />
      <path d="M6.09698 9.14823H2.28535" />
    </svg>
  );
}

export function DownloadIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 18.2958 18.2958"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.30684"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9.1489 11.4356V2.28766" />
      <path d="M16.0073 11.4367V14.486C16.0073 14.8903 15.8467 15.2781 15.5608 15.5641C15.2748 15.85 14.887 16.0106 14.4827 16.0106H3.81012C3.40576 16.0106 3.01796 15.85 2.73203 15.5641C2.4461 15.2781 2.28547 14.8903 2.28547 14.486V11.4367" />
      <path d="M5.33482 7.62355L9.14645 11.4352L12.9581 7.62355" />
    </svg>
  );
}

export function DocIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20.9095 20.9095"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.30684"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18.2947 18.2961L14.5136 14.515" />
      <path d="M9.58328 16.5536C13.4326 16.5536 16.5531 13.4331 16.5531 9.58375C16.5531 5.73441 13.4326 2.61391 9.58328 2.61391C5.73395 2.61391 2.61345 5.73441 2.61345 9.58375C2.61345 13.4331 5.73395 16.5536 9.58328 16.5536Z" />
    </svg>
  );
}

export function ExpandIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20.9095 20.9095"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.30684"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7.84107 11.326C8.32223 11.326 8.7123 10.9359 8.7123 10.4548C8.7123 9.97359 8.32223 9.58353 7.84107 9.58353C7.3599 9.58353 6.96984 9.97359 6.96984 10.4548C6.96984 10.9359 7.3599 11.326 7.84107 11.326Z" />
      <path d="M7.84107 5.22738C8.32223 5.22738 8.7123 4.83731 8.7123 4.35615C8.7123 3.87498 8.32223 3.48492 7.84107 3.48492C7.3599 3.48492 6.96984 3.87498 6.96984 4.35615C6.96984 4.83731 7.3599 5.22738 7.84107 5.22738Z" />
      <path d="M7.84107 17.4246C8.32223 17.4246 8.7123 17.0345 8.7123 16.5534C8.7123 16.0722 8.32223 15.6821 7.84107 15.6821C7.3599 15.6821 6.96984 16.0722 6.96984 16.5534C6.96984 17.0345 7.3599 17.4246 7.84107 17.4246Z" />
      <path d="M13.0684 11.326C13.5496 11.326 13.9397 10.9359 13.9397 10.4548C13.9397 9.97359 13.5496 9.58353 13.0684 9.58353C12.5873 9.58353 12.1972 9.97359 12.1972 10.4548C12.1972 10.9359 12.5873 11.326 13.0684 11.326Z" />
      <path d="M13.0684 5.22738C13.5496 5.22738 13.9397 4.83731 13.9397 4.35615C13.9397 3.87498 13.5496 3.48492 13.0684 3.48492C12.5873 3.48492 12.1972 3.87498 12.1972 4.35615C12.1972 4.83731 12.5873 5.22738 13.0684 5.22738Z" />
      <path d="M13.0684 17.4246C13.5496 17.4246 13.9397 17.0345 13.9397 16.5534C13.9397 16.0722 13.5496 15.6821 13.0684 15.6821C12.5873 15.6821 12.1972 16.0722 12.1972 16.5534C12.1972 17.0345 12.5873 17.4246 13.0684 17.4246Z" />
    </svg>
  );
}

export function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20.9095 20.9095"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.30684"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18.2947 18.2959L14.5136 14.5148" />
      <path d="M9.58328 16.5539C13.4326 16.5539 16.5531 13.4334 16.5531 9.58402C16.5531 5.73468 13.4326 2.61418 9.58328 2.61418C5.73395 2.61418 2.61345 5.73468 2.61345 9.58402C2.61345 13.4334 5.73395 16.5539 9.58328 16.5539Z" />
    </svg>
  );
}
