import style from '../styles/Error.module.css';
import React from 'react';
import Head from 'next/head';
export default class Error500 extends React.Component {
    render() {
        return (
            <>
                <Head>
                    <title>Drijon - 500</title>
                </Head>
                <div className={style.align}>
                    <div className={style.container}>
                        <img src='https://ubiq.co/tech-blog/wp-content/uploads/2020/08/apache-500-internal-server-error.png' style={{ width: '100%' }} />
                        <strong style={{ fontSize: 32, color: '#ddd9e6' }}>500</strong><text style={{ color: 'rgb(65, 59, 74)', fontSize: 24 }}> ⌋ Internal server error</text> <br />
                    </div>
                </div>
            </>
        );
    };
};
