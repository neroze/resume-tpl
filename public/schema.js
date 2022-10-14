const schema = [
  {
    title: "æ ‡é¢˜",
    dataIndex: "title",
    initialValue: "å¿…å¡«",
    formItemProps: {
      rules: [
        {
          required: true,
          message: "æ­¤é¡¹ä¸ºå¿…å¡«é¡¹"
        }
      ]
    },
    width: "m"
  },
  {
    title: "çŠ¶æ€",
    dataIndex: "state",
    valueType: "select",
    valueEnum,
    width: "m",
    tooltip: "å½“titleä¸ºdisabledæ—¶çŠ¶æ€æ— æ³•é€‰æ‹©",
    fieldProps: (form) =&gt; {
      if (form.getFieldValue("title") === "disabled") {
        return {
          disabled: true,
          placeholder: "disabled"
        };
      } else {
        return {
          placeholder: "normal"
        };
      }
    }
  },
  {
    title: "æ ‡ç­¾",
    dataIndex: "labels",
    width: "m",
    tooltip: "å½“titleä¸ºå¿…å¡«æ—¶æ­¤é¡¹å°†ä¸ºå¿…å¡«",
    formItemProps(form) {
      if (form.getFieldValue("title") === "å¿…å¡«") {
        return {
          rules: [
            {
              required: true
            }
          ]
        };
      } else {
        return {};
      }
    }
  },
  {
    title: "åˆ›å»ºæ—¶é—´",
    key: "showTime",
    dataIndex: "createName",
    valueType: "date"
  }
];
