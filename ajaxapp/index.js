async function main() {
  try {
    const userInfo = await fetchUserInfo("js-primer-example");
    const view = createView(userInfo);
    displayView(view);
  } catch (error) {
    console.error(`エラーが発生しました (${error})`);
  }
}

function fetchUserInfo(userId) {
  // fetchの戻り値のPromiseをreturnする
  return fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
    .then(response => {
      // エラーレスポンスが返されたことを検知する
      if (!response.ok) {
        // エラーレスポンスからRejectedなPromiseを作成して返す
        return Promise.reject(new Error(`${response.status}: ${response.statusText}`));
      } else {
        // JSONオブジェクトで解決されるPromiseを返す
        return response.json();
      }
    });
}

function getUserId() {
  return document.getElementById("userId").value;
}

function createView(userInfo) {
  return escapeHTML`
  <h4>${userInfo.name} (@${userInfo.login})</h4>
  <img src="${userInfo.avatar_url}" alt="${userInfo.login}" height="100">
  <dl>
    <dt>Location</dt>
    <dd>${userInfo.location}</dd>
    <dt>Repositories</dt>
    <dd>${userInfo.public_repos}</dd>
  </dl>
`;
}

function displayView(view) {
  const result = document.getElementById("result");
  result.innerHTML = view;
}

function escapeSpecialChars(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
// タグ関数（第1引数にテンプレートリテラルの配列、第2引数にその値が渡される）
function escapeHTML(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i - 1];
    if (typeof value === "string") {
      return result + escapeSpecialChars(value) + str;
    } else {
      return result + String(value) + str;
    }
  });
}
