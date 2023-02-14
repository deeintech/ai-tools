import React, {useState, useMemo, useEffect} from 'react';
import clsx from 'clsx';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import Translate, {translate} from '@docusaurus/Translate';
import {useHistory, useLocation} from '@docusaurus/router';
import Layout from '@theme/Layout';
import FavoriteIcon from '@site/src/components/svgIcons/FavoriteIcon';
import {
  sortedTools,
  Tags,
  TagList,
  type Tool,
  type TagType,
} from '@site/src/data/tools';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import CardItem from './_components/CardItem';
import CardItemTagSelect, { readSearchTags } from './_components/CardItemTagSelect';

const TITLE = translate({message: 'AI Tools'});
const DESCRIPTION = translate({
  message: `If you can't beat them, join them`,
});

type UserState = {
  scrollTopPosition: number;
  focusedElementId: string | undefined;
};

function restoreUserState(userState: UserState | null) {
  const {scrollTopPosition, focusedElementId} = userState ?? {
    scrollTopPosition: 0,
    focusedElementId: undefined,
  };
  document.getElementById(focusedElementId)?.focus();
  window.scrollTo({top: scrollTopPosition});
}

export function prepareUserState(): UserState | undefined {
  if (ExecutionEnvironment.canUseDOM) {
    return {
      scrollTopPosition: window.scrollY,
      focusedElementId: document.activeElement?.id,
    };
  }

  return undefined;
}

const SearchNameQueryKey = 'name';

function readSearchName(search: string) {
  return new URLSearchParams(search).get(SearchNameQueryKey);
}

function filterTools(
  tools: Tool[],
  selectedTags: TagType[],
  searchName: string | null,
) {
  if (searchName) {
    // eslint-disable-next-line no-param-reassign
    tools = tools.filter((tool) =>
      tool.title.toLowerCase().includes(searchName.toLowerCase()) || tool.description.toLowerCase().includes(searchName.toLowerCase()),
    );
  }
  if (selectedTags.length === 0) {
    return tools;
  }
  return tools.filter((tool) => {
    if (tool.tags.length === 0) {
      return false;
    }
    return selectedTags.every((tag) => tool.tags.includes(tag));
  });
}

function useFilteredTools() {
  const location = useLocation<UserState>();
  // On SSR / first mount (hydration) no tag is selected
  const [selectedTags, setSelectedTags] = useState<TagType[]>([]);
  const [searchName, setSearchName] = useState<string | null>(null);
  // Sync tags from QS to state (delayed on purpose to avoid SSR/Client
  // hydration mismatch)
  useEffect(() => {
    setSelectedTags(readSearchTags(location.search));
    setSearchName(readSearchName(location.search));
    restoreUserState(location.state);
  }, [location]);

  return useMemo(
    () => filterTools(sortedTools, selectedTags, searchName),
    [selectedTags, searchName],
  );
}

function ShowcaseHeader() {
  return (
    <section className="margin-bottom--lg text--center">
      <Heading as="h1">{TITLE}</Heading>
      <p>{DESCRIPTION}</p>
      <SearchBar />
    </section>
  );
}

function ShowcaseFilters() {
  return (
    <section className="container margin-top--l margin-bottom--lg">
      <ul className={clsx('clean-list', styles.checkboxList)}>
        {TagList.map((tag, i) => {
          const {label, description, color} = Tags[tag];
          const id = `tool_checkbox_id_${tag}`;

          return (
            <li key={i} className={styles.checkboxListItem}>
                <CardItemTagSelect
                  tag={tag}
                  id={id}
                  label={label}
                  icon={
                    tag === 'featured' ? (
                      <FavoriteIcon svgClass={styles.svgIconFavoriteXs} />
                    ) : (
                      <span
                        style={{
                          backgroundColor: color,
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          marginLeft: 8,
                        }}
                      />
                    )
                  }
                />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function SearchBar() {
  const history = useHistory();
  const location = useLocation();
  const [value, setValue] = useState<string | null>(null);
  useEffect(() => {
    setValue(readSearchName(location.search));
  }, [location]);
  return (
    <div className={styles.searchContainer}>
      <input
        id="searchbar"
        placeholder={translate({
          message: 'go',
          id: 'item.searchBar.placeholder',
        })}
        value={value ?? undefined}
        onInput={(e) => {
          setValue(e.currentTarget.value);
          const newSearch = new URLSearchParams(location.search);
          newSearch.delete(SearchNameQueryKey);
          if (e.currentTarget.value) {
            newSearch.set(SearchNameQueryKey, e.currentTarget.value);
          }
          history.push({
            ...location,
            search: newSearch.toString(),
            state: prepareUserState(),
          });
          setTimeout(() => {
            document.getElementById('searchbar')?.focus();
          }, 0);
        }}
      />
    </div>
  );
}

function CardItems() {
  const filteredTools = useFilteredTools();

  if (filteredTools.length === 0) {
    return (
      <section className="margin-top--lg margin-bottom--xl">
        <div className="container padding-vert--md text--center">
          <Heading as="h2">
            <Translate id="item.toolsList.noResult">No result</Translate>
          </Heading>
        </div>
      </section>
    );
  }

  return (
    <section className="margin-top--lg margin-bottom--xl">
      {filteredTools.length === sortedTools.length ? (
        <>
          <div className="container margin-top--lg">
            <ul className={clsx('clean-list', styles.cardItemList)}>
              {sortedTools.map((tool) => (
                <CardItem key={tool.title} tool={tool} />
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div className="container">
          <div
            className={clsx(
              styles.cardItemFavoriteHeader,
            )}>
          </div>
          <ul className={clsx('clean-list', styles.cardItemList)}>
            {filteredTools.map((tool) => (
              <CardItem key={tool.title} tool={tool} />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className="margin-vert--lg">
        <ShowcaseHeader />
        <ShowcaseFilters />
        <CardItems />
      </main>
    </Layout>
  );
}
