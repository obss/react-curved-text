const HeaderInfo = () => {
    const versionInfo = `Version: ${process.env.REACT_APP_VERSION}`;

    return (
        <>
            <div className={'logo-div'}>
                <a href={'https://www.npmjs.com/package/react-curved-text'} target="_blank" rel="noreferrer">
                    <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" />
                </a>
            </div>
            <div className={'header-div'}>
                <span className={'githubIcon'} title="View on GitHub">
                    <a href={'https://github.com/obss/react-curved-text'} target="_blank" rel="noreferrer">
                        <img src={process.env.PUBLIC_URL + '/github.png'} alt="github_icon" />
                    </a>
                </span>
                <span className={'npmIcon'} title="View on npmjs">
                    <a href={'https://www.npmjs.com/package/react-curved-text'} target="_blank" rel="noreferrer">
                        <img src={process.env.PUBLIC_URL + '/npm.png'} alt="npm_icon" />
                    </a>
                </span>
                <span className={'versionInfo'} title="Current Version">
                    <a href={'https://www.npmjs.com/package/react-curved-text'} target="_blank" rel="noreferrer">
                        {versionInfo}
                    </a>
                </span>
            </div>
            <div className={'obssTriangle'}>
                <a className={'triangleIcon'} href={'https://obss.tech/'} target={'_blank'} rel="noreferrer">
                    <img width={50} height={50} src={process.env.PUBLIC_URL + '/obss.png'} alt={'obss'} />
                </a>
            </div>
        </>
    );
};

export default HeaderInfo;
