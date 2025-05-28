// filepath: e:\CURSOS-FERNANDO\REACT-PRO\03-my-storybook-fcc\src\stories\Navbar.tsx
// import './navbar.css';

export interface NavbarProps {
   /**
    * The title to display in the navbar
    */
   title: string;
   /**
    * Optional click handler for the title
    */
   onTitleClick?: () => void;
}

export const Navbar = ({ title, onTitleClick }: NavbarProps) => {
   return (
      <nav
         className="navbar"
         style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
            backgroundColor: "#f8f9fa",
         }}
      >
         <div style={{ display: "flex", alignItems: "center" }}>
            <span>Logo:</span>
            <h1
               onClick={onTitleClick}
               className="navbar-title"
               style={{ color: "red", fontSize: "24px" }}
            >
               {title}
            </h1>
         </div>
         <button
            onClick={() => navigator.clipboard.writeText(window.location.href)}
         >
            Copy address
         </button>
         {/* Additional navigation items can be added here */}
      </nav>
   );
};
