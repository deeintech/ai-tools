import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Image from '@theme/IdealImage';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import FavoriteIcon from '../../../components/svgIcons/FavoriteIcon';
import {
    Tags,
    TagList,
    type TagType,
    type Tool,
    type Tag,
} from '../../../data/tools';
import {sortBy} from '../../../utils/jsUtils';
import Tooltip from '../ShowcaseTooltip';
import styles from './styles.module.css';

const TagComp = React.forwardRef<HTMLLIElement, Tag>(
    ({label, color, description}, ref) => (
      <li ref={ref} className={styles.tag} title={description}>
        <span className={styles.textLabel}>{label.toLowerCase()}</span>
        <span className={styles.colorLabel} style={{backgroundColor: color}} />
      </li>
    ),
  );
  
  function ShowcaseCardTag({tags}: {tags: TagType[]}) {
    const tagObjects = tags.map((tag) => ({tag, ...Tags[tag]}));
  
    // Keep same order for all tags
    const tagObjectsSorted = sortBy(tagObjects, (tagObject) =>
      TagList.indexOf(tagObject.tag),
    );
  
    return (
      <>
        {tagObjectsSorted.map((tagObject, index) => {
          const id = `showcase_card_tag_${tagObject.tag}`;
  
          return (
            <Tooltip
              key={index}
              text={tagObject.description}
              anchorEl="#__docusaurus"
              id={id}>
              <TagComp key={index} {...tagObject} />
            </Tooltip>
          );
        })}
      </>
    );
  }
  
  function getCardImage(tool: Tool): string {
    return (
      tool.image ??
      `https://slorber-api-screenshot.netlify.app/${encodeURIComponent(
        tool.website,
      )}/showcase`
    );
  }
  
  function ShowcaseCard({tool}: {tool: Tool}) {
    const image = getCardImage(tool);
    return (
      <li key={tool.title} className="card shadow--md">
        <div className={clsx('card__image', styles.showcaseCardImage)}>
          <Image img={image} alt={tool.title} />
        </div>
        <div className="card__body">
          <div className={clsx(styles.showcaseCardHeader)}>
            <Heading as="h4" className={styles.showcaseCardTitle}>
              <Link href={tool.website} className={styles.showcaseCardLink}>
                {tool.title}
              </Link>
            </Heading>
            {tool.tags.includes('featured') && (
              <FavoriteIcon svgClass={styles.svgIconFavorite} size="small" />
            )}
            {(tool.price !== 0) ? `$${tool.price}+` : 'free'}
          </div>
          <p className={styles.showcaseCardBody}>{tool.description}</p>
        </div>
        <ul className={clsx('card__footer', styles.cardFooter)}>
          <ShowcaseCardTag tags={tool.tags} />
        </ul>
      </li>
    );
  }
  
  export default React.memo(ShowcaseCard);
  