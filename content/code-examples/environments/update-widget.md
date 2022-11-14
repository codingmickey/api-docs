---
title: Novu update widget settings
id: put-/v1/environments/widget/settings
type: snippets
---

```javascript label=Node.js
import { Novu } from '@novu/node';

export const novu = new Novu('<REPLACE_WITH_API_KEY_FROM_ADMIN_PANEL>');

const payload: IWidgetUpdatePayload = {
  notificationCenterEncryption: true
}

await novu.environments.updateWidget(payload);
```
