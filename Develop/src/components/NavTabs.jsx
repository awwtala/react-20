// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full border-b-[5px]">
      <div class="mb-2 sm:mb-0">
        <a
          href="#"
          class=" text-2xl no-underline text-grey-darkest hover:text-blue-dark"
        >
          <h2>Tala Awwad</h2>
        </a>
      </div>
      <div>
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          class=" btn btn-secondary text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >
          About
        </a>
        <a
          href="#Portfolio"
          onClick={() => handlePageChange("Portfolio")}
          class=" btn btn-secondary text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >
          Portfolio
        </a>
        <a
          href="#Contact"
          onClick={() => handlePageChange("Contact")}
          class="btn btn-secondary text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >
          Contact
        </a>
        <a
          href="#Resume"
          onClick={() => handlePageChange("Resume")}
          class=" btn btn-secondary text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >
          Resume
        </a>
      </div>
    </nav>
  );
  // return (
  //   <div>
  //     <div className="nav-item">
  //
  //     </div>
  //     <ul className="nav nav-tabs">
  //       <li className="nav-item">
  // <a
  //   href="#about"
  //   onClick={() => handlePageChange("About")}
  //   className={currentPage === "About" ? "nav-link active" : "nav-link"}
  // >
  //   About
  // </a>
  //       </li>
  //       <li className="nav-item">
  //         <a
  //           href="#Portfolio"
  //           onClick={() => handlePageChange("Portfolio")}
  //           className={
  //             currentPage === "Portfolio" ? "nav-link active" : "nav-link"
  //           }
  //         >
  //           Portfolio
  //         </a>
  //       </li>
  //       <li className="nav-item">
  //         <a
  //           href="#contact"
  //           onClick={() => handlePageChange("Contact")}
  //           className={
  //             currentPage === "Contact" ? "nav-link active" : "nav-link"
  //           }
  //         >
  //           Contact
  //         </a>
  //       </li>
  //       <li className="nav-item">
  //         <a
  //           href="#Resume"
  //           onClick={() => handlePageChange("Resume")}
  //           className={
  //             currentPage === "Resume" ? "nav-link active" : "nav-link"
  //           }
  //         >
  //           Resume
  //         </a>
  //       </li>
  //     </ul>
  //   </div>
  // );
}

export default NavTabs;
