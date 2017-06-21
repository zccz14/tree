import React from 'react';

export default class Node extends React.Component {
    render() {
        let { data, path } = this.props;
        if (typeof (data) === 'string') {
            data = {
                name: data
            }
        }
        if (path === undefined) {
            path = [];
        }
        let id = path.map(v => v.key + 1).join('.');
        let hasDesc = !!data.desc;
        let hasChildren = !!data.children;
        let hasKeys = !!data.keys;
        let hasBeginEnd = (data.begin && data.end);
        return (
            <div className="node" id={data.name}>
                <p className="name"><span>{id}</span> {data.name}</p>
                <p>Path: {path.map((v, i) => (<a key={i} href={`#${v.name}`} className="path-item">{v.name}</a>))}</p>
                {hasDesc ? <p>
                    Description:<span className="desc">{data.desc}</span>
                </p> : null}
                {hasKeys ? <p>Keyword: {data.keys.map((v, i) => (<span key={i} className="keyword-item">{v}</span>))}</p> : null}
                {hasBeginEnd ? <p>See Also: from {data.begin} to {data.end}</p> : null}
                {hasChildren ?
                    <div>
                        {data.children.map((v, i) => (<Node data={v} key={i} path={[...path, {key: i, name: data.name}]} />))}
                    </div>
                    : null
                }
                <p className="EON">- End of <b>{data.name}</b> -</p>
            </div>
        )
    }
}