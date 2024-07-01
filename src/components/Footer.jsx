import { resourcesLinks, platformLinks, communityLinks } from "../constants";
const Footer = () => {
  return (
    // <footer className="mt-20 border-t  py-10 border-neutral-700">
    //   <div className="grid grid-col-2 lg:grid-col-4 gap-4">
    //     <div>
    //       <h3 className="text-md font-semibold mb-4">Resources</h3>
    //       <ul className="space-y-2">
    //         {resourcesLinks.map((Link, index) => (
    //           <li key={index}>
    //             <a
    //               className="text-neutral-300 hover:text-sky-700"
    //               href={Link.href}
    //             >
    //               {Link.text}
    //             </a>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //     <div>
    //       <h3 className="text-md font-semibold mb-4">Platform links</h3>
    //       <ul className="space-y-2">
    //         {platformLinks.map((Link, index) => (
    //           <li key={index}>
    //             <a
    //               className="text-neutral-300 hover:text-sky-700"
    //               href={Link.href}
    //             >
    //               {Link.text}
    //             </a>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //     <div>
    //       <h3 className="text-md font-semibold mb-4">Community Links</h3>
    //       <ul className="space-y-2">
    //         {communityLinks.map((Link, index) => (
    //           <li key={index}>
    //             <a
    //               className="text-neutral-300 hover:text-sky-700"
    //               href={Link.href}
    //             >
    //               {Link.text}
    //             </a>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    // </footer>
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:ml-20 ml-12">
        <div>
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((Link, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-sky-700"
                  href={Link.href}
                >
                  {Link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Platform links</h3>
          <ul className="space-y-2">
            {platformLinks.map((Link, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-sky-700"
                  href={Link.href}
                >
                  {Link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Community Links</h3>
          <ul className="space-y-2">
            {communityLinks.map((Link, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-sky-700"
                  href={Link.href}
                >
                  {Link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-center mt-10">
        <p className="text-neutral-500">
          Designed by
          <span className="bg-gradient-to-r from-sky-900 to-sky-700 text-transparent bg-clip-text">
            {" "}
            Abdul Hannan
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
