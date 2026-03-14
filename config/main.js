{
    "_comment1": "API 相关配置（暂时没用，预留）",
    "api": {
        "base_url": "https://api.example.com",
        "timeout": 30,
        "retry": 3
    },

    "_comment2": "机器人基本设置",
    "bot": {
        "name": "我的微信机器人",
        "admin_wxid": "wxid_xxxxxxxx",   // 这里填你的微信ID，管理员永远会处理消息
        "auto_reply": true
    },

    "_comment3": "消息处理规则（最关键的部分）",
    "message_handlers": {
        "enabled": true,                  // 总开关

        "target_users": [                  // 要处理的用户ID列表
            "wxid_user1",                  // 留空 [] 表示处理所有用户
            "wxid_user2"
        ],
        "target_groups": [                  // 要处理的群ID列表
            "xxxxxx@chatroom",               // 留空 [] 表示处理所有群
            "yyyyyy@chatroom"
        ],

        "blocked_users": [                  // 屏蔽的用户（不处理）
            "wxid_black1"
        ],
        "blocked_groups": [                  // 屏蔽的群（不处理）
            "blackgroup@chatroom"
        ],

        "_comment4": "规则优先级：先检查屏蔽列表，再检查目标列表（如果目标列表为空则处理所有）"
    },

    "_comment5": "HTTP 服务端口，一般不用改",
    "http_server": {
        "main_port": 5000,       // 主程序端口
        "service_port": 5001      // 微信服务进程端口
    }
}
