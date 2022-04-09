import config from '../config';
import style from '../styles/Home.module.css';
import { useState, useEffect } from 'react';

import { HiOutlineNewspaper, HiOutlineLink, HiX, HiOutlineExclamation, HiOutlineFolder, HiOutlineMenuAlt2, HiOutlineFire, HiOutlineCode } from 'react-icons/hi';
export default function Homepage({ user, cards, error }) {
    const [width, setWidth] = useState()
    useEffect(() => {
        setInterval(() => {
            if (window.innerWidth == width) return;
            setWidth(window.innerWidth);
        }, 400)
    });
    return (
        <>
            <div className={style.align}>
                <div className={style.container}>
                    <div className={style.align}>
                        <div alt='banner' className={style.banner} style={{ background: `url('${user?.banner}') no-repeat left top`, backgroundSize: 'cover' }}></div>
                        <div className={style.on_banner} style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 68%, rgb(30, 26, 34) 100%)', display: user?.banner ? '' : 'none' }} />
                    </div>
                    <div className={style.me}>
                        <div className={style.profilepicture} style={{ backgroundColor: (user?.status?.state?.color || `#747F8D`) }}>
                            <img src={user?.avatar} alt='profile picture' draggable={false} style={{ width: 138, borderRadius: 10 }} />
                        </div>
                        <div style={{ marginLeft: 176, marginTop: (user?.status?.emote || user?.status?.text) ? 14 : 35 }} className={style.name}>
                            <text style={(user?.status?.emote || user?.status?.text) ? { fontSize: 44, color: '#fff' } : { fontSize: 48, position: 'relative', top: 4, color: '#fff' }}>{user?.nickname}</text>
                            {(user?.status?.emote || user?.status?.text) ?
                                <div style={{ display: 'felx' }}>
                                    {user?.status?.emote ? <img src={user?.status?.emote} style={{ width: 24, borderRadius: 3, marginTop: 4, marginRight: 3 }} draggable={false} /> : <></>}
                                    <text style={{ position: 'relative', top: -5, left: 4, color: '#CCCCCC', fontSize: 20 }}>{user?.status?.text ? user?.status?.text : ``}</text>
                                </div>
                                : <></>
                            }
                        </div>
                        <div className={style.badges} style={(user?.status?.emote || user?.status?.text) ? { marginTop: 8 } : { marginTop: width > 540 ? 14 : 4 }}>
                            <button className={style.badge} title='https://discord.gg/Hfr2wdbGZC' onClick={() => window.open('https://discord.gg/Hfr2wdbGZC')}> <HiOutlineFire style={{ height: 22, width: 22, marginRight: 4 }} /> Server </button>
                            <button className={style.badge} title='' onClick={() => window.open('https://discord.com/channels/@me/950070037438414899')}> <HiOutlineCode style={{ height: 22, width: 22, marginRight: 4 }} />DM Me</button>
                        </div>
                    </div>
                    <div className={style.content}>
                        <div className={style.readme}>
                            <strong style={{ fontSize: 27 }}>👋 About me</strong> <br />
                            <div style={{ marginTop: 8, marginLeft: 12 }}>
                                I'm <strong>Drijon</strong>, born in <strong>South Tyrol </strong> and live in <strong>Italy</strong> to be precise in South Tyrol.
                                I'm a  <strong>Web Developer</strong> and <strong></strong>
                                I self taught me the programming Language <strong>Python</strong> and with some help of a friend i created my first Discord Bot <strong>Not Public </strong>  
                                If you want to learn more about me, DM me or my <button className='link' style={{ fontSize: '1.1rem' }} onClick={() => window.open('https://discord.gg/Hfr2wdbGZC')}>Join my Discord Server</button> 
                            </div>
                            <br />
                            <strong style={{ fontSize: 27 }}>👨‍💻 Languages & Programming Languages</strong><br />
                            <div style={{ marginTop: 8, marginLeft: 12 }}>
                                •&nbsp; English <br />
                                •&nbsp; German<br />
                                •&nbsp; Italian<br />
                                •&nbsp; Albanian<br />
                                •&nbsp; Python<br />
                                •&nbsp; HTML/CSS/JavaScript
                            </div>
                            <br />
                            <strong style={{ fontSize: 27 }}></strong><br />
                            <div style={{ marginTop: 8, marginLeft: 12 }}>
                                Want to talk with me?  <br />
                                Join my <button className='link' style={{ fontSize: '1.1rem' }} onClick={() => window.open('https://discord.gg/Hfr2wdbGZC')}>Discord server</button> and Ping me, or E-Mail me under this E-Mail: help@drijon.xyz
                            </div>
                        </div>
                        <div className={user?.activities.length > 0 ? style.section : ''}>
                            {user?.activities.map((activity) => (
                                <div className={style.readme} style={{ paddingLeft: 14 }} key={activity.applicationId}>
                                    <strong style={{ fontSize: 24, color: '#ddd9e6' }}>{activity.name}</strong><text style={{ color: 'rgb(99, 90, 112)' }}> ⌋ {activity.name.toLowerCase().includes(`music`) ? 'Listening' : (activity.name.toLowerCase().includes(`youtube`) ? 'Watching' : (activity.name.toLowerCase().includes(`code`) ? 'Developing' : (activity.name.toLowerCase().includes(`github`) ? 'Browsing' : 'Playing')))}</text>
                                    <div style={{ display: 'flex' }}>
                                        <div style={{ position: 'relative', marginTop: 6 }}>
                                            {activity.assets.large.image ?
                                                <img src={activity.assets.large.image} style={{ height: 80, borderRadius: 4 }} draggable={false} alt={`${activity.name}'s big icon`} title={activity.assets.large.text} />
                                                : <></>
                                            }
                                            {activity.assets.small.image ?
                                                <img src={activity.assets.small.image} style={{ height: 27, position: 'absolute', top: 62, left: 66, backgroundColor: '#201d24', borderRadius: 10, outline: '#201d24 solid 0.2rem' }} draggable={false} alt={`${activity.name}'s small icon`} title={activity.assets.small.text} />
                                                : <></>
                                            }
                                        </div>
                                        <div style={{ marginTop: 24, marginLeft: 8 }}>
                                            <div style={{ display: 'flex', marginBottom: 2 }}>
                                                <HiOutlineFolder style={{ minHeight: 21, minWidth: 21 }} />
                                                <div style={{ marginLeft: 4, marginTop: 3, fontSize: '1.1rem', position: 'relative', bottom: 2 }}>{activity.details?.length >= 70 ? `${activity.details.slice(0, -(activity.details?.length - 70 + 3))}...` : activity.details}</div>
                                            </div>
                                            <div style={{ display: 'flex', marginTop: 2 }}>
                                                <HiOutlineMenuAlt2 style={{ minHeight: 21, minWidth: 21 }} />
                                                <div style={{ marginLeft: 4, marginTop: 3, fontSize: '1.1rem', position: 'relative', bottom: 2 }}>{activity.state?.length >= 70 ? `${activity.state.slice(0, -(activity.state?.length - 70 + 3))}...` : activity.state}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={cards?.length > 0 ? style.section : ''} style={{ marginBottom: width > 540 ? 20 : 60 }}>
                            {cards?.map((card) => (
                                <div className={style.readme} style={{ paddingLeft: 14 }} key={card.name}>
                                    <strong style={{ fontSize: 24, color: '#ddd9e6' }}>{card.name}</strong>{card.position ? <text style={{ color: 'rgb(99, 90, 112)' }}> ⌋ {card.position}</text> : <></>}
                                    <div style={{ marginTop: 4, display: 'flex' }}>
                                        <HiOutlineNewspaper style={{ minHeight: 22, minWidth: 22 }} />
                                        <div style={{ marginTop: 2 }}>&nbsp;{card.description}</div>
                                    </div>
                                    <button style={{ marginTop: 4, display: 'flex', color: 'currentColor', cursor: 'pointer' }} onClick={() => window.open(card.url)}>
                                        <HiOutlineLink style={{ minHeight: 21, minWidth: 21 }} />
                                        <div className='link' style={{ marginTop: 2, fontSize: '1.1rem', position: 'relative', bottom: 3 }}>&nbsp;{card.url.replace(/https:\/\//, ``)}</div>
                                    </button>
                                    <img src={card.icon} className={style.icon} draggable={false} alt={`${card.name}'s icon`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {error === true ?
                    <div className={style.error} id='error'>
                        <strong><HiOutlineExclamation style={{ minHeight: 23, minWidth: 23, position: 'relative', top: 5 }} /> ERROR:</strong>
                        <div style={{ fontFamily: 'Roboto Mono, monospace' }}>
                            Failed to fetch user data; <br />
                            Using preconfigured data;
                        </div>
                        <button style={{ position: 'absolute', top: 8, right: 8, display: 'flex' }} onClick={() => { document.getElementById('error').className += ' Home_fadeout__2jQec'; setTimeout(() => { document.getElementById('error').style.display = 'none' }, 900) }} >
                            <HiX /> <div style={{ position: 'relative', bottom: 2 }}>CLOSE</div>
                        </button>
                    </div>
                    : <></>
                }
            </div>
        </>
    );
};

Homepage.getInitialProps = async () => {
    let user = {};
    let error = false;
    if (config.api.url && config.api.path) try {
        user = await fetch(`${config.api.url}${config.api.path.startsWith(`/`) ? `${config.api.path}` : `/${config.api.path}`}`).then(res => res.json()).catch(() => { return; });
    } catch (e) { error = e }
    if (user?.status !== 200 || !user?.content?.id) {
        if (config.api.url && config.api.path) error = true;
        user = { content: config.user };
    };

    return { user: user?.content, cards: config?.cards, error: error };
};
