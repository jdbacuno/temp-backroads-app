import { pageLinks } from '../data';
import PageLink from './PageLink';

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id={parentClass}>
      {pageLinks.map((link) => {
        // const { id, href, text } = link;

        // return (
        //   <li key={id}>
        //     <a href={href} className={itemClass}>
        //       {text}
        //     </a>
        //   </li>
        // );

        return <PageLink {...link} key={link.id} itemClass={itemClass} />;
      })}
    </ul>
  );
};

export default PageLinks;
