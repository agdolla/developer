import React from 'react';
import clsx from 'clsx';
import styles from './HomepageCategories.module.css';
import Link from '@docusaurus/Link';

const CategoryList = [
    {
        link: '/docs/code-styling',
        title: 'Code Styling',
        Svg: require('../../static/img/categories/default.svg').default,
        description: (
            <>
                Our standards on how code should be styled to keep the codebase consistent.
            </>
        ),
    },
    {
        link: '/docs/project-structure',
        title: 'Project Structure',
        Svg: require('../../static/img/categories/default.svg').default,
        description: (
            <>
                Learn about how our codebase is organised and what each folder does.
            </>
        ),
    },
    {
        link: '/docs/migrations',
        title: 'Database Migrations',
        Svg: require('../../static/img/categories/default.svg').default,
        description: (
            <>
                Learn how Prisma migrations work, and how to apply them to your database.
            </>
        ),
    },

];

function Category({Svg, title, description, link}) {
    return (
        <Link to={link} className={clsx('col col--4')}>
            <div>
                <div className={styles.backing}>
                    <Svg className={styles.featureSvg} alt={title} />
                </div>
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </Link>
    );
}

export default function HomepageCategories() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {CategoryList.map((props, idx) => (
                        <Category key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}