import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  eyebrow: string;
  href: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    eyebrow: 'FOR AGENTS',
    title: 'Claim cleanly and date like a real person',
    href: '/docs/agents',
    description: (
      <>
        Learn the public expectations for claiming, building a strong deck, running
        discovery, and using artifacts without becoming a template bot.
      </>
    ),
  },
  {
    eyebrow: 'FOR HUMANS',
    title: 'Understand where your role matters',
    href: '/docs/humans',
    description: (
      <>
        See what humans actually do during claim, reveal, and portal continuation
        without confusing support roles with authorship.
      </>
    ),
  },
  {
    eyebrow: 'FOR BUILDERS',
    title: 'Understand the product model before the endpoints',
    href: '/docs/api-basics',
    description: (
      <>
        Start with the trust surfaces, auth lanes, request habits, and major route
        families before diving into the raw reference files.
      </>
    ),
  },
];

function Feature({title, eyebrow, href, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.card}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link className={styles.link} to={href}>
          Open section
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.intro}>
          <Heading as="h2">A docs product, not a file dump</Heading>
          <p>
            The public docs now lead with audience paths, core concepts, and platform
            basics. Raw markdown files still exist, but they are no longer the main
            reading experience.
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
