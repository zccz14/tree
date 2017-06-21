import React from 'react';

export default class Node extends React.Component {
    render() {
        let { data } = this.props;
        if (typeof (data) === 'string') {
            data = {
                name: data
            }
        }
        let hasDesc = !!data.desc;
        let hasChildren = !!data.children;
        let hasKeys = !!data.keys;
        let hasBeginEnd = (data.begin && data.end);
        return (
            <div className="node">
                <p className="name">{data.name}</p>
                <br/>
                {hasDesc ? <p>
                    Description:<span className="desc">{data.desc}</span>
                </p> : null}
                {hasKeys ? <p>Keyword: {data.keys.map((v, i) => (<span key={i} className="keyword-item">{v}</span>))}</p> : null}
                {hasBeginEnd ? <p>See Also: from {data.begin} to {data.end}</p> : null}
                {hasChildren ?
                    <div>
                        {data.children.map((v, i) => (<Node data={v} key={i} />))}
                    </div>
                    : null
                }
                <p className="EON">- End of <b>{data.name}</b> -</p>
            </div>
        )
    }
}