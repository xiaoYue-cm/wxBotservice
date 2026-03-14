{
    "api": { ... },
    "bot": {
        "name": "机器人名称",
        "admin_wxid": "wxid_xxxx",
        "auto_reply": true
    },
    "message_handlers": {
        "enabled": true,
        "target_users": ["wxid_user1", "wxid_user2"],
        "target_groups": ["xxxx@chatroom"],
        "blocked_users": [],
        "blocked_groups": []
    },
    "http_server": {
        "main_port": 5000,
        "service_port": 5001
    }
}