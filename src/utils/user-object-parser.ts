export const userObjectParser = (req: any, env: string) => {
  if (["development", "test"].includes(env)) {
    req.headers["x-auth-request-email"] = "rootuser@local.local";
    req.headers["x-auth-request-preferred-username"] = "Test User";
    req.headers["x-auth-request-access-token"] =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmZvcmVzaWdodC5waXNjYWRhLm9ubGluZS9yZWFsbXMvZm9yZXNpZ2h0IiwiaWF0IjoxNjcyNjY5MTUwLCJleHAiOjIyMDkxMjY3NTAsImF1ZCI6Im9hdXRoMi1wcm94eSIsInN1YiI6IjYyNjg5ZDc0LTU5NWUtNDkxYS1iYmU1LWY2MDE3NzUwYjAyZiIsInByZWZlcnJlZF91c2VybmFtZSI6IlRlc3QgVXNlciIsImdpdmVuX25hbWUiOiJUZXN0IiwiZmFtaWx5X25hbWUiOiJVc2VyIiwiZW1haWwiOiJ0ZXN0LnVzZXJAcGlzY2FkYS5jb20iLCJyZW1pbmRlciI6ImlmIHlvdSB3YW50IHRvIGFkZCBhIGZpZWxkIHRvIEpXVCB5b3UgY2FuIHVzZSBodHRwOi8vand0YnVpbGRlci5qYW1pZWt1cnR6LmNvbS8ifQ.4fL4HltIS_ArE_1JNBSogOnWh2m5nbJ2Y7Ro-Ki9mTE";
    req.headers.authorization =
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmZvcmVzaWdodC5waXNjYWRhLm9ubGluZS9yZWFsbXMvZm9yZXNpZ2h0IiwiaWF0IjoxNjcyNjY5MTUwLCJleHAiOjIyMDkxMjY3NTAsImF1ZCI6Im9hdXRoMi1wcm94eSIsInN1YiI6IjYyNjg5ZDc0LTU5NWUtNDkxYS1iYmU1LWY2MDE3NzUwYjAyZiIsInByZWZlcnJlZF91c2VybmFtZSI6IlRlc3QgVXNlciIsImdpdmVuX25hbWUiOiJUZXN0IiwiZmFtaWx5X25hbWUiOiJVc2VyIiwiZW1haWwiOiJ0ZXN0LnVzZXJAcGlzY2FkYS5jb20iLCJyZW1pbmRlciI6ImlmIHlvdSB3YW50IHRvIGFkZCBhIGZpZWxkIHRvIEpXVCB5b3UgY2FuIHVzZSBodHRwOi8vand0YnVpbGRlci5qYW1pZWt1cnR6LmNvbS8ifQ.4fL4HltIS_ArE_1JNBSogOnWh2m5nbJ2Y7Ro-Ki9mTE";
    req.headers["x-auth-request-groups"] =
      "/module-access/alarms,/module-access/analytics-store,/module-access/applications-store,/module-access/dashboard-builder,/module-access/dashboard-viewer,/module-access/data-points,/module-access/data-providers-store,/module-access/documents,/grafana/editor,/module-access/energy,/module-access/entity-explorer,/module-access/feedback,/tenant/piscada,/module-access/graph-explorer,/module-access/home,/module-access/httpbin,/module-access/kubernetes-dashboard,/module-access/metrics,/module-access/tracing,/module-access/user-group-management,/module-access/vessel-management,/module-access/web-analytics,role:offline_access,role:uma_authorization,role:default-roles-foresight,role:account:manage-account,role:account:manage-account-links,role:account:view-profile";
  }

  let preferredUsername = (req.headers["x-auth-request-preferred-username"] as string) || "";

  // username is send as lower case by microsoft auth , later this formatting can be removed
  if (preferredUsername) {
    preferredUsername = preferredUsername
      .split(" ")
      .map((name) => name[0].toUpperCase() + name.slice(1))
      .join(" ");
  }

  return {
    email: (req.headers["x-auth-request-email"] as string) || "",
    preferred_username: preferredUsername,
    access_token: (req.headers["x-auth-request-access-token"] as string) || "",
    authorization_header: (req.headers.authorization as string) || "",
    groups: (req.headers["x-auth-request-groups"] as string) || "",
  };
};
