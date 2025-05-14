import Organization from "./admin/organization";
import { CustomPopover } from "./popover.component";
import cn from "classnames";

const Header = () => {
  const isWalletConnected = false; // Replace with actual wallet connection logic
  return (
    <header className="flex items-center justify-between py-3 border-b border-gray-800 w-full mx-auto px-40">
      <h1 className="text-2xl font-medium uppercase">
        <a href={"/"}>
          Priva<span className="text-orange-500">pay</span>
        </a>
      </h1>

      <div className="flex gap-4 items-center">
        {isWalletConnected ? (
          <CustomPopover
            className="flex flex-col gap-2"
            trigger={
              <button className="lg:px-4 lg:py-2 border border-gray-800 rounded-md flex items-center gap-2">
                <div className={cn("w-2 h-2 rounded-full bg-icon")} />
                <span className="hidden lg:block">Connect Wallet</span>
              </button>
            }
          >
            hey
          </CustomPopover>
        ) : (
          <button className="lg:px-4 lg:py-2 border border-gray-800 rounded-md flex items-center gap-2">
            <div className={cn("w-2 h-2 rounded-full bg-icon")} />
            <span className="hidden lg:block">Connect Wallet</span>
          </button>
        )}
        <Organization />
      </div>
    </header>
  );
};

export default Header;
