import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageCategories from '../components/HomepageCategories';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header>
            <div className="container">
                <h1>Developer Documentation</h1>
                <p>Explore information and guides about building on top of and extending Calendso.</p>
            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Home | ${siteConfig.title}`}
            description="Explore information and guides about building on top of and extending Calendso.">
            <HomepageHeader />
            <main>
                <HomepageCategories />
            </main>
        </Layout>
    );
}
