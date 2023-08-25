import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import { string } from "prop-types";

const features = [
    {
        title: "开放",
        description: (
            <>
                所有资料默认以 CC-BY-SA 4.0 授权开放。
                <br />
                <br />
                <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
                    <img
                        alt="知识共享许可协议"
                        style={{ borderWidth: 0 }}
                        src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png"
                    />
                </a>
                <br />
                本作品采用
                <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
                    知识共享署名-相同方式共享 4.0 国际许可协议
                </a>
                进行许可。
            </>
        ),
    },
    {
        title: "实用",
        description: (
            <>
                我们致力于提供全方面的实用 THUAI7 规则说明。
                <ul>
                    <li>
                        <Link to="/docs/intro">引入</Link>: 较为主流的编程语言介绍
                    </li>
                    <li>
                        <Link to="/docs/map">地图</Link>: 实用的开发工具介绍
                    </li>
                    <li>
                        <Link to="/docs/ship">舰船</Link>: 以 Unity3D 为主的游戏开发介绍
                    </li>
                    <li>
                        <Link to="/docs/construction">建筑</Link>: 以 JS/TS 为主的 Web 开发介绍
                    </li>
                    <li>
                        <Link to="/docs/attack">攻击</Link>: 以 C++ 为主的游戏 AI 开发介绍
                    </li>
                    <li>
                        <Link to="/docs/score">得分</Link>: 以 Python 为主的游戏 AI 开发介绍
                    </li>
                    <li>
                        <Link to="/docs/detail">细则</Link>: 以 Python 为主的游戏 AI 开发介绍
                    </li>
                </ul>
            </>
        ),
    },
];

function Feature({ imageUrl, title, description }) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={clsx("col col", styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <img className={styles.featureImage} src={imgUrl} alt={title} />
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

Feature.propTypes = {
    imageUrl: string,
    title: string,
    description: string,
};

Feature.defaultProps = {
    imageUrl: "",
    title: "",
    description: "",
};

function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
        <Layout
            title={`EESAST | 清华大学电子工程系学生科协`}
            description="清华大学电子工程系学生科协"
        >
            <header className={clsx("hero hero--primary", styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={clsx(
                                "button button--outline button--secondary button--lg",
                                styles.getStarted
                            )}
                            to={useBaseUrl("docs/intro")}
                        >
                            <font color="white">THUAI7，启动！</font>
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                {features && features.length > 0 && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map((props, idx) => (
                                    <Feature key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </Layout>
    );
}

export default Home;