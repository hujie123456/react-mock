import React, { Component } from "react";
import Mock from "mockjs";
import { Table, Card } from "antd";
import axios from "axios";

Mock.mock("http://20181024Mock.com/mode1/tableDataOne", "post", options => {
  let req = JSON.parse(options.body);
  return Mock.mock({
    "count": 60,
    [`dataSource|${req.pageSize}`]: [
      {
        "key|+1": 1,
        "name|1": ["哑巴", "Butter-fly", "肆无忌惮", "摩天大楼", "初学者"],
        "text|1": [
          "你翻译不了我的声响",
          "数码宝贝主题曲",
          "摩天大楼太稀有",
          "像海浪撞破了山丘"
        ],
        "action|1": ["下载", "试听", "喜欢"]
      }
    ]
  });
});

class Helloworld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      pagination: {
        pageSize: 10,
        showQuickJumper: true,
        showTotal: total => `总计${total}条数据`,
        onChange: page => {
            this.init(page)
        }
      },
      columns: [
        {
          title: "姓名",
          dataIndex: "name"
        },
        {
          title: "文本",
          dataIndex: "text"
        },
        {
          title: "行为",
          dataIndex: "action"
        }
      ]
    };
  }

  init = (page = 1) => {
    Mock.setup({
      timeout: 200
    });
    this.setState({
      loading: true
    });
    axios
      .post("http://20181024Mock.com/mode1/tableDataOne", {
        page,
        pageSize: 10
      })
      .then(res => {
        if (res.status == 200) {
          console.log(res);
          const { pagination } = this.state;
          pagination.total = res.data.count;
          this.setState({
            data: res.data.dataSource,
            loading: false
          });
        }
      });
  };

  componentDidMount() {
      this.init()
  }

  render() {
    const { data, loading, columns, pagination } = this.state;
    return (
      <Table
        dataSource={data}
        columns={columns}
        bordered
        loading={loading}
        pagination={pagination}
      />
    );
  }
}

export default Helloworld;
