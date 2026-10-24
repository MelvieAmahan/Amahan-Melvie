(function () {

  // =====================================================
  // PREVENT DUPLICATE INJECTION
  // =====================================================

  if (document.getElementById("fc-floating-btn")) {
    return;
  }


  // =====================================================
  // FLOATING BUTTON
  // =====================================================

  const btn = document.createElement("button");

  btn.id = "fc-floating-btn";
  btn.type = "button";
  btn.setAttribute("aria-label", "Open Chat Everywhere");
  btn.innerHTML = "💬";

  document.body.appendChild(btn);


  // =====================================================
  // CHATBOX
  // =====================================================

  const chatbox = document.createElement("div");

  chatbox.id = "fc-chatbox";
  chatbox.style.display = "none";

  chatbox.innerHTML = `

    <!-- =================================================
         HEADER
    ================================================= -->

    <div id="fc-chatbox-header">

      <div class="fc-title">

        <span class="fc-logo">
          💬
        </span>

        <div>

          <div class="fc-title-main">
            Chat Everywhere
          </div>

          <div class="fc-status">
            <span class="fc-online-dot"></span>
            <span id="fc-connection-state">Offline</span>
          </div>

        </div>

      </div>

      <button
        id="fc-chatbox-close"
        type="button"
        aria-label="Close chat"
      >
        ✕
      </button>

    </div>


    <!-- =================================================
         NAVIGATION TABS
    ================================================= -->

    <div id="fc-tabs">

      <button
        class="fc-tab active"
        data-tab="chats"
        type="button"
      >
        💬
        <span>Chats</span>
      </button>


      <button
        class="fc-tab"
        data-tab="media"
        type="button"
      >
        🖼️
        <span>Media</span>
      </button>


      <button
        class="fc-tab"
        data-tab="groups"
        type="button"
      >
        👥
        <span>Groups</span>
      </button>


      <button
        class="fc-tab"
        data-tab="shares"
        type="button"
      >
        🔗
        <span>Shares</span>
      </button>


      <button
        class="fc-tab"
        data-tab="tools"
        type="button"
      >
        🛠️
        <span>Tools</span>
      </button>

    </div>


    <!-- =================================================
         CONTENT
    ================================================= -->

    <div id="fc-content">


      <!-- =================================================
           CHATS
      ================================================= -->

      <div
        class="fc-panel active"
        id="fc-panel-chats"
      >

        <div class="fc-panel-title">

          <div>

            <h3>
              Chats
            </h3>

            <p>
              Your conversations
            </p>

          </div>


          <button
            class="fc-small-btn"
            id="fc-new-chat"
            type="button"
          >
            + New
          </button>

        </div>


        <!-- CHAT LIST -->

        <div id="fc-chat-list">

          <div class="fc-chat-item">


            <div class="fc-chat-info">


            </div>

            <small>
              10:02 AM
            </small>

          </div>


          <div class="fc-chat-item">

            <div class="fc-avatar">
              GC
            </div>

            <div class="fc-chat-info">

              <strong>
                Group Chat
              </strong>

              <span>
                Meeting at 2 PM
              </span>

            </div>

            <small>
              9:45 AM
            </small>

          </div>

        </div>


        <!-- MESSAGES -->

        <div id="fc-active-group-title">Select a group to open its conversation.</div>
        <div id="fc-chatbox-messages"></div>


        <!-- INPUT -->

        <div id="fc-chatbox-input-row">

          <input
            id="fc-chatbox-input"
            type="text"
            maxlength="2000"
            placeholder="Type a message..."
          />

          <button
            id="fc-chatbox-send"
            type="button"
          >
            Send
          </button>

        </div>

      </div>


      <!-- =================================================
           MEDIA
      ================================================= -->

      <div
        class="fc-panel"
        id="fc-panel-media"
      >

        <div class="fc-panel-title">

          <div>

            <h3>
              Media
            </h3>

            <p>
              Photos and files
            </p>

          </div>


          <label class="fc-small-btn">

            + Add

            <input
              id="fc-photo-input"
              type="file"
              accept="image/*"
              hidden
            />

          </label>

        </div>


        <div class="fc-photo-grid">

          <div class="fc-photo-card">

            <img
              src="https://picsum.photos/300/220?random=1"
              alt="Shared photo"
            />

            <div class="fc-photo-info">

              <strong>
                Photo 1
              </strong>

              <span>
                Today
              </span>

            </div>

          </div>


          <div class="fc-photo-card">

            <img
              src="https://picsum.photos/300/220?random=2"
              alt="Shared photo"
            />

            <div class="fc-photo-info">

              <strong>
                Photo 2
              </strong>

              <span>
                Today
              </span>

            </div>

          </div>


          <div class="fc-photo-card">

            <img
              src="https://picsum.photos/300/220?random=3"
              alt="Shared photo"
            />

            <div class="fc-photo-info">

              <strong>
                Photo 3
              </strong>

              <span>
                Yesterday
              </span>

            </div>

          </div>


          <div class="fc-photo-card">

            <img
              src="https://picsum.photos/300/220?random=4"
              alt="Shared photo"
            />

            <div class="fc-photo-info">

              <strong>
                Photo 4
              </strong>

              <span>
                Yesterday
              </span>

            </div>

          </div>


          <div class="fc-photo-card">

            <img
              src="https://picsum.photos/300/220?random=5"
              alt="Shared photo"
            />

            <div class="fc-photo-info">

              <strong>
                Photo 5
              </strong>

              <span>
                Monday
              </span>

            </div>

          </div>


          <div class="fc-photo-card">

            <img
              src="https://picsum.photos/300/220?random=6"
              alt="Shared photo"
            />

            <div class="fc-photo-info">

              <strong>
                Photo 6
              </strong>

              <span>
                Monday
              </span>

            </div>

          </div>

        </div>

      </div>


      <!-- =================================================
           GROUPS
      ================================================= -->

      <div
        class="fc-panel"
        id="fc-panel-groups"
      >

        <div class="fc-panel-title">

          <div>

            <h3>
              Groups
            </h3>

            <p>
              Your group conversations
            </p>

          </div>


          <div class="fc-group-actions">
            <button class="fc-small-btn" id="fc-create-group" type="button">+ Create</button>
            <button class="fc-small-btn" id="fc-join-group" type="button">Join</button>
            <button class="fc-small-btn" id="fc-add-member" type="button">+ Member</button>
          </div>

        </div>


        <div id="fc-group-list"></div>

      </div>


      <!-- =================================================
           SHARES
      ================================================= -->

      <div
        class="fc-panel"
        id="fc-panel-shares"
      >

        <div class="fc-panel-title">

          <div>

            <h3>
              Shares
            </h3>

            <p>
              Shared links and files
            </p>

          </div>


          <button
            class="fc-small-btn"
            id="fc-share-current"
            type="button"
          >
            + Share
          </button>

        </div>


        <div id="fc-share-list">

          <div class="fc-share-item">

            <div class="fc-share-icon">
              🔗
            </div>

            <div>

              <strong>
                Current Website
              </strong>

              <span id="fc-current-url">
                ${escapeHTML(window.location.href)}
              </span>

            </div>

          </div>


          <div class="fc-share-item">

            <div class="fc-share-icon">
              📄
            </div>

            <div>

              <strong>
                Project Document
              </strong>

              <span>
                Shared file
              </span>

            </div>

          </div>

        </div>

      </div>


      <!-- =================================================
           TOOLS
      ================================================= -->

      <div
        class="fc-panel"
        id="fc-panel-tools"
      >

        <div class="fc-panel-title">

          <div>

            <h3>
              Tools
            </h3>

            <p>
              Useful webpage tools
            </p>

          </div>

        </div>


    

        <!-- DARK MODE -->

        <div class="fc-tool-card">

          <div class="fc-tool-icon">
            🌙
          </div>

          <div class="fc-tool-info">

            <h4>
              Dark Mode
            </h4>

            <p>
              Toggle dark mode for the webpage
            </p>

            <button
              id="fc-dark-mode"
              type="button"
            >
              🌙 Toggle Dark Mode
            </button>

          </div>

        </div>


        <!-- RELOAD -->

        <div class="fc-tool-card">

          <div class="fc-tool-icon">
            🔄
          </div>

          <div class="fc-tool-info">

            <h4>
              Reload Page
            </h4>

            <p>
              Reload the current webpage
            </p>

            <button
              id="fc-reload-page"
              type="button"
            >
              🔄 Reload Page
            </button>

          </div>

        </div>

      </div>

    </div>

  `;


  document.body.appendChild(chatbox);


  // =====================================================
  // ELEMENTS
  // =====================================================

  const messages =
    chatbox.querySelector("#fc-chatbox-messages");

  const input =
    chatbox.querySelector("#fc-chatbox-input");

  const sendBtn =
    chatbox.querySelector("#fc-chatbox-send");

  const closeBtn =
    chatbox.querySelector("#fc-chatbox-close");

  const tabs =
    chatbox.querySelectorAll(".fc-tab");

  const panels =
    chatbox.querySelectorAll(".fc-panel");

  const chatContent =
    chatbox.querySelector("#fc-content");

  const connectionState =
    chatbox.querySelector("#fc-connection-state");

  const groupList =
    chatbox.querySelector("#fc-group-list");

  const activeGroupTitle =
    chatbox.querySelector("#fc-active-group-title");

  const firebaseDatabasePath =
    "https://ext-chrome-4385a-default-rtdb.asia-southeast1.firebasedatabase.app";

  const firebaseApiKey = "AIzaSyDdMGo1bllBapH607nr8lpkBZDraGVgv_U";
  let authSession = null;
  let groupIds = [];
  let activeGroup = null;
  let pollHandle = null;
  let initialization = null;
  const renderedMessageIds = new Set();

  function storageGet(keys) {
    return new Promise((resolve) => {
      chrome.storage.local.get(keys, resolve);
    });
  }

  function storageSet(values) {
    return new Promise((resolve) => {
      chrome.storage.local.set(values, resolve);
    });
  }

  function setConnectionState(text) {
    if (connectionState) {
      connectionState.textContent = text;
    }
  }

  function callFirebaseWorker(request) {
    return new Promise((resolve, reject) => {
      chrome.runtime.sendMessage(request, (response) => {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
          return;
        }

        if (!response || !response.ok) {
          reject(new Error(response?.error || "Firebase request failed."));
          return;
        }

        resolve(response.data);
      });
    });
  }

  async function firebaseRequest(path, method = "GET", data = null, query = "") {
    const session = await getAuthSession();

    try {
      return await callFirebaseWorker({
        type: "fc-firebase-request",
        path,
        method,
        data,
        query,
        token: session.idToken
      });
    } catch (error) {
      if (!/401|expired|token/i.test(error.message)) {
        throw error;
      }

      await refreshAuthSession();
      return callFirebaseWorker({
        type: "fc-firebase-request",
        path,
        method,
        data,
        query,
        token: authSession.idToken
      });
    }
  }

  async function callAuthEndpoint(action, body, refresh = false) {
    const response = await callFirebaseWorker({
      type: "fc-firebase-auth",
      action,
      apiKey: firebaseApiKey,
      body,
      refresh
    });

    return response;
  }

  async function refreshAuthSession() {
    if (!authSession?.refreshToken) {
      throw new Error("Please sign in to Firebase again.");
    }

    const result = await callAuthEndpoint(
      "token",
      { refresh_token: authSession.refreshToken, grant_type: "refresh_token" },
      true
    );

    authSession = {
      ...authSession,
      idToken: result.id_token,
      refreshToken: result.refresh_token,
      expiresAt: Date.now() + Number(result.expires_in) * 1000
    };

    await storageSet({ fc_auth_session: authSession });
  }

  async function getAuthSession() {
    if (!authSession) {
      await initializeFirebase();
    }

    if (authSession.expiresAt < Date.now() + 60000) {
      await refreshAuthSession();
    }

    return authSession;
  }

  async function initializeFirebase() {
    if (initialization) {
      return initialization;
    }

    initialization = (async () => {
      const saved = await storageGet([
        "fc_auth_session",
        "fc_group_ids",
        "fc_display_name"
      ]);

      groupIds = Array.isArray(saved.fc_group_ids) ? saved.fc_group_ids : [];
      authSession = saved.fc_auth_session || null;

      if (authSession && authSession.expiresAt > Date.now() + 60000) {
        await loadGroups();
        return;
      }

      if (authSession?.refreshToken) {
        await refreshAuthSession();
        await loadGroups();
        return;
      }

      const email = prompt("Enter your Firebase account email:");
      const password = prompt("Enter your Firebase account password:");

      if (!email || !password) {
        throw new Error("Firebase sign-in was cancelled.");
      }

      const createAccount = confirm(
        "Create a new Firebase account? Choose Cancel to sign in to an existing account."
      );
      const result = await callAuthEndpoint(
        createAccount ? "accounts:signUp" : "accounts:signInWithPassword",
        { email, password, returnSecureToken: true }
      );
      const displayName = saved.fc_display_name || prompt("Choose the name shown with your messages:") || email.split("@")[0];

      authSession = {
        email,
        localId: result.localId,
        idToken: result.idToken,
        refreshToken: result.refreshToken,
        expiresAt: Date.now() + Number(result.expiresIn) * 1000,
        displayName
      };

      await storageSet({
        fc_auth_session: authSession,
        fc_display_name: displayName
      });

      alert(`Your Firebase member ID is ${authSession.localId}. Share this ID with a group owner so they can add you.`);
      await loadGroups();
    })();

    try {
      return await initialization;
    } catch (error) {
      initialization = null;
      throw error;
    }
  }

  async function loadGroups() {
    const availableGroups = [];

    for (const id of groupIds) {
      try {
        const [name, ownerUid, members] = await Promise.all([
          firebaseRequest(`groups/${id}/name`),
          firebaseRequest(`groups/${id}/ownerUid`),
          firebaseRequest(`groups/${id}/members`)
        ]);
        if (members?.[authSession.localId] === true) {
          availableGroups.push({ id, name, ownerUid, members });
        }
      } catch {
        // Ignore groups this account no longer has access to.
      }
    }

    groupIds = availableGroups.map((group) => group.id);
    await storageSet({ fc_group_ids: groupIds });
    renderGroups(availableGroups);
  }

  function renderGroups(groups) {
    if (!groupList) {
      return;
    }

    if (groups.length === 0) {
      groupList.innerHTML = '<p class="fc-groups-empty">No groups yet. Create one or join with a group ID.</p>';
      return;
    }

    groupList.innerHTML = groups.map((group) => `
      <div class="fc-group-item" data-group-id="${escapeHTML(group.id)}">
        <div class="fc-group-icon">👥</div>
        <div>
          <strong>${escapeHTML(group.name || "Group")}</strong>
          <span>${Object.keys(group.members || {}).length} members</span>
        </div>
      </div>
    `).join("");

    groupList.querySelectorAll(".fc-group-item").forEach((item) => {
      item.addEventListener("click", () => {
        const selected = groups.find((group) => group.id === item.dataset.groupId);
        if (selected) {
          openGroup(selected);
        }
      });
    });
  }

  async function openGroup(group) {
    activeGroup = group;
    renderedMessageIds.clear();
    messages.replaceChildren();
    activeGroupTitle.textContent = `${group.name} · ${group.id}`;
    openTab("chats");

    if (pollHandle) {
      clearInterval(pollHandle);
    }

    await loadMessages();
    pollHandle = setInterval(() => {
      loadMessages().catch((error) => setConnectionState("Connection error"));
    }, 2500);
  }

  async function loadMessages() {
    if (!activeGroup) {
      return;
    }

    const groupId = activeGroup.id;

    const query = new URLSearchParams({
      orderBy: '"$key"',
      limitToLast: "100"
    }).toString();
    const storedMessages = await firebaseRequest(
      `groups/${groupId}/messages`,
      "GET",
      null,
      query
    );

    if (storedMessages && typeof storedMessages === "object") {
      Object.entries(storedMessages).sort(([left], [right]) => left < right ? -1 : left > right ? 1 : 0).forEach(([id, message]) => {
        if (activeGroup?.id !== groupId) {
          return;
        }
        if (!renderedMessageIds.has(id)) {
          renderedMessageIds.add(id);
          addMessage(message.text, message.senderUid === authSession.localId ? "user" : "bot", message.senderName, message.createdAt);
        }
      });
    }

    setConnectionState("Connected");
  }

  async function ensureFirebaseReady() {
    try {
      await initializeFirebase();
      setConnectionState("Connected");
    } catch (error) {
      setConnectionState("Offline");
      alert(error.message);
    }
  }


  // =====================================================
  // OPEN / CLOSE
  // =====================================================

  let isOpen = false;

  function toggleChat() {

    isOpen = !isOpen;

    if (isOpen) {

      chatbox.classList.add("fc-open");

      chatbox.style.display = "flex";

      ensureFirebaseReady();

      setTimeout(() => {

        if (input) {
          input.focus();
        }

      }, 100);

    } else {

      chatbox.classList.remove("fc-open");

      chatbox.style.display = "none";

    }

  }


  function closeChat() {

    isOpen = false;

    chatbox.classList.remove("fc-open");

    chatbox.style.display = "none";

  }


  // =====================================================
  // TAB SYSTEM
  // =====================================================

  function openTab(tabName) {

    tabs.forEach((tab) => {

      tab.classList.remove("active");

    });


    panels.forEach((panel) => {

      panel.classList.remove("active");

    });


    const selectedTab =
      chatbox.querySelector(
        `.fc-tab[data-tab="${tabName}"]`
      );


    const selectedPanel =
      chatbox.querySelector(
        `#fc-panel-${tabName}`
      );


    if (selectedTab) {

      selectedTab.classList.add("active");

    }


    if (selectedPanel) {

      selectedPanel.classList.add("active");

    }


    if (tabName === "tools") {

      updatePageInfo();

    }

  }


  tabs.forEach((tab) => {

    tab.addEventListener("click", () => {

      openTab(tab.dataset.tab);

    });

  });


  // =====================================================
  // NORMAL MESSAGE
  // =====================================================

  function addMessage(text, sender, senderName = "", createdAt = Date.now()) {

    const msg =
      document.createElement("div");

    msg.className =
      `fc-message ${sender}`;

    const author = document.createElement("strong");
    author.className = "fc-message-author";
    author.textContent = senderName || (sender === "user" ? authSession?.displayName || "You" : "Member");

    const body = document.createElement("span");
    body.className = "fc-message-text";
    body.textContent = text;

    const time = document.createElement("time");
    time.className = "fc-message-time";
    time.dateTime = new Date(createdAt).toISOString();
    time.textContent = new Date(createdAt).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });

    msg.append(author, body, time);

    messages.appendChild(msg);

    messages.scrollTop =
      messages.scrollHeight;

  }


  function sendMessage() {

    const text =
      input.value.trim();

    if (!text) {
      return;
    }


    if (!activeGroup || !authSession) {
      alert("Sign in and open a group before sending a message.");
      return;
    }

    input.value = "";
    sendBtn.disabled = true;

    firebaseRequest(`groups/${activeGroup.id}/messages`, "POST", {
      text,
      senderUid: authSession.localId,
      senderName: authSession.displayName,
      createdAt: Date.now()
    }).then(() => loadMessages()).catch((error) => {
      alert(`Message could not be sent: ${error.message}`);
      input.value = text;
    }).finally(() => {
      sendBtn.disabled = false;
      input.focus();
    });

  }


  sendBtn.addEventListener("click", sendMessage);

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  });


  // =====================================================
  // YOUTUBE URL CHECK
  // =====================================================

  function isYouTubeURL(url) {
    try {
      const parsed =
        new URL(url);

      const hostname =
        parsed.hostname.toLowerCase();


      // youtube.com/watch?v=

      if (
        hostname.includes("youtube.com") &&
        parsed.pathname === "/watch"
      ) {

        return parsed.searchParams.get("v");

      }


      // youtube.com/shorts/

      if (
        hostname.includes("youtube.com") &&
        parsed.pathname.startsWith("/shorts/")
      ) {

        return parsed.pathname
          .split("/")[2];

      }


      // youtu.be/

      if (
        hostname.includes("youtu.be")
      ) {

        return parsed.pathname
          .replace("/", "")
          .split("?")[0];

      }

    } catch {

      return null;

    }


    return null;

  }


  // =====================================================
  // GET URL FROM DRAG DATA
  // =====================================================

  function getDroppedURL(e) {

    let url = "";


    if (!e.dataTransfer) {
      return "";
    }


    // TEXT/URI-LIST

    try {

      const uri =
        e.dataTransfer.getData(
          "text/uri-list"
        );


      if (uri) {

        const firstURL =
          uri
            .split(/\r?\n/)
            .find(
              line =>
                line &&
                !line.startsWith("#")
            );


        if (firstURL) {

          url =
            firstURL.trim();

        }

      }

    } catch (error) {

      console.log(
        "URI read failed:",
        error
      );

    }


    // TEXT/PLAIN

    if (!url) {

      try {

        const text =
          e.dataTransfer.getData(
            "text/plain"
          );


        if (text) {

          const match =
            text.match(
              /https?:\/\/[^\s]+/i
            );


          if (match) {

            url =
              match[0];

          }

        }

      } catch (error) {

        console.log(
          "Text read failed:",
          error
        );

      }

    }


    // HTML

    if (!url) {

      try {

        const html =
          e.dataTransfer.getData(
            "text/html"
          );


        if (html) {

          const temp =
            document.createElement("div");

          temp.innerHTML = html;


          const links =
            temp.querySelectorAll("a");


          for (const link of links) {

            if (
              link.href &&
              isYouTubeURL(link.href)
            ) {

              url =
                link.href;

              break;

            }

          }

        }

      } catch (error) {

        console.log(
          "HTML read failed:",
          error
        );

      }

    }


    if (url) {

      url =
        url
          .trim()
          .replace(/^["']|["']$/g, "");

    }


    return url;

  }


  // =====================================================
  // ADD YOUTUBE MESSAGE
  // =====================================================

  function addYouTubeMessage(url) {

    const videoID =
      getYouTubeID(url);


    if (!videoID) {

      console.log(
        "Invalid YouTube URL:",
        url
      );

      return;

    }


    const message =
      document.createElement("div");

    message.className =
      "fc-message fc-youtube-message";


    const card =
      document.createElement("div");

    card.className =
      "fc-youtube-card";


    // THUMBNAIL

    const thumbnail =
      document.createElement("img");

    thumbnail.className =
      "fc-youtube-thumb";

    thumbnail.src =
      `https://img.youtube.com/vi/${encodeURIComponent(videoID)}/mqdefault.jpg`;

    thumbnail.alt =
      "YouTube video thumbnail";


    thumbnail.onerror =
      function () {

        this.style.display = "none";

      };


    // DETAILS

    const details =
      document.createElement("div");

    details.className =
      "fc-youtube-details";


    // LABEL

    const label =
      document.createElement("div");

    label.className =
      "fc-youtube-label";

    label.textContent =
      "▶ YouTube Video";


    // TITLE

    const title =
      document.createElement("div");

    title.className =
      "fc-youtube-title";

    title.textContent =
      "YouTube Video";


    // CLICKABLE URL

    const link =
      document.createElement("a");

    link.className =
      "fc-youtube-url";

    link.href =
      url;

    link.target =
      "_blank";

    link.rel =
      "noopener noreferrer";

    link.textContent =
      url;

    link.title =
      "Open YouTube video";


    details.appendChild(label);

    details.appendChild(title);

    details.appendChild(link);


    card.appendChild(thumbnail);

    card.appendChild(details);


    message.appendChild(card);

    messages.appendChild(message);


    messages.scrollTop =
      messages.scrollHeight;

  }


  // =====================================================
  // DRAG OVER
  // =====================================================

  function dragOverHandler(e) {

    e.preventDefault();

    e.stopPropagation();


    if (e.dataTransfer) {

      e.dataTransfer.dropEffect =
        "copy";

    }


    chatbox.classList.add(
      "fc-drag-over"
    );

  }


  // =====================================================
  // DRAG LEAVE
  // =====================================================

  function dragLeaveHandler(e) {

    if (
      !chatContent.contains(
        e.relatedTarget
      )
    ) {

      chatbox.classList.remove(
        "fc-drag-over"
      );

    }

  }


  // =====================================================
  // DROP
  // =====================================================

  function dropHandler(e) {

    e.preventDefault();

    e.stopPropagation();


    chatbox.classList.remove(
      "fc-drag-over"
    );


    console.log(
      "🔥 DROP DETECTED"
    );


    const droppedURL =
      getDroppedURL(e);


    console.log(
      "Dragged URL:",
      droppedURL
    );


    // ACTUAL DRAGGED URL

    if (
      droppedURL &&
      isYouTubeURL(droppedURL) &&
      getYouTubeID(droppedURL)
    ) {

      addYouTubeMessage(
        droppedURL
      );

      openTab("chats");

      return;

    }


    // FALLBACK CURRENT PAGE

    const currentURL =
      window.location.href;


    if (
      isYouTubeURL(currentURL) &&
      getYouTubeID(currentURL)
    ) {

      addYouTubeMessage(
        currentURL
      );

      openTab("chats");

      return;

    }


    alert(
      "No YouTube video link was detected."
    );

  }


  // =====================================================
  // DRAG EVENTS
  // =====================================================

  chatContent.addEventListener(
    "dragover",
    dragOverHandler,
    true
  );


  chatContent.addEventListener(
    "dragenter",
    dragOverHandler,
    true
  );


  chatContent.addEventListener(
    "dragleave",
    dragLeaveHandler,
    true
  );


  chatContent.addEventListener(
    "drop",
    dropHandler,
    true
  );


  chatbox.addEventListener(
    "dragover",
    dragOverHandler,
    true
  );


  chatbox.addEventListener(
    "dragenter",
    dragOverHandler,
    true
  );


  chatbox.addEventListener(
    "drop",
    dropHandler,
    true
  );


  // =====================================================
  // MEDIA UPLOAD
  // =====================================================

  const photoInput =
    chatbox.querySelector(
      "#fc-photo-input"
    );


  if (photoInput) {

    photoInput.addEventListener(
      "change",
      (e) => {

        const file =
          e.target.files[0];


        if (!file) {
          return;
        }


        if (
          !file.type.startsWith("image/")
        ) {

          alert(
            "Please select an image."
          );

          return;

        }


        const reader =
          new FileReader();


        reader.onload =
          function () {

            const card =
              document.createElement("div");

            card.className =
              "fc-photo-card";


            card.innerHTML = `

              <img
                src="${reader.result}"
                alt="Uploaded photo"
              />

              <div class="fc-photo-info">

                <strong>
                  ${escapeHTML(file.name)}
                </strong>

                <span>
                  Just now
                </span>

              </div>

            `;


            const grid =
              chatbox.querySelector(
                ".fc-photo-grid"
              );


            if (grid) {

              grid.prepend(card);

            }

          };


        reader.readAsDataURL(file);

        e.target.value = "";

      }
    );

  }


  // =====================================================
  // CREATE GROUP
  // =====================================================

  const createGroupBtn = chatbox.querySelector("#fc-create-group");
  createGroupBtn.addEventListener("click", async () => {
    const name = prompt("Enter group name:")?.trim();
    if (!name) return;

    try {
      await initializeFirebase();
      const id = crypto.randomUUID().replaceAll("-", "");
      await firebaseRequest(`groups/${id}`, "PUT", {
        name,
        ownerUid: authSession.localId,
        members: { [authSession.localId]: true },
        invites: {}
      });
      groupIds.push(id);
      await storageSet({ fc_group_ids: groupIds });
      await loadGroups();
    } catch (error) {
      alert(`Group could not be created: ${error.message}`);
    }
  });

  const joinGroupBtn = chatbox.querySelector("#fc-join-group");
  joinGroupBtn.addEventListener("click", async () => {
    const id = prompt("Enter the group ID shared by the group owner:")?.trim();
    if (!id || !/^[A-Za-z0-9_-]{1,128}$/.test(id)) return;

    try {
      await initializeFirebase();
      const invite = await firebaseRequest(`groups/${id}/invites/${authSession.localId}`);
      if (invite !== true) throw new Error("No invitation was found for this account.");
      await firebaseRequest(`groups/${id}/members/${authSession.localId}`, "PUT", true);
      await firebaseRequest(`groups/${id}/invites/${authSession.localId}`, "PUT", null);
      groupIds.push(id);
      await storageSet({ fc_group_ids: [...new Set(groupIds)] });
      await loadGroups();
    } catch (error) {
      alert(`Could not join group: ${error.message}`);
    }
  });

  const addMemberBtn = chatbox.querySelector("#fc-add-member");
  addMemberBtn.addEventListener("click", async () => {
    if (!activeGroup) {
      alert("Open a group first.");
      return;
    }

    const uid = prompt("Enter the member's Firebase member ID:")?.trim();
    if (!uid || !/^[A-Za-z0-9_-]{1,128}$/.test(uid)) return;

    try {
      await firebaseRequest(`groups/${activeGroup.id}/invites/${uid}`, "PUT", true);
      alert(`Invitation created. Share group ID ${activeGroup.id} with the member; they can join from their Groups tab.`);
    } catch (error) {
      alert(`Invitation could not be created: ${error.message}`);
    }
  });


  // =====================================================
  // NEW CHAT
  // =====================================================

  const newChatBtn =
    chatbox.querySelector(
      "#fc-new-chat"
    );


  if (newChatBtn) {

    newChatBtn.addEventListener(
      "click",
      () => {

        const name =
          prompt(
            "Enter person's name:"
          );


        if (
          !name ||
          !name.trim()
        ) {

          return;

        }


        const chatList =
          chatbox.querySelector(
            "#fc-chat-list"
          );


        const item =
          document.createElement("div");

        item.className =
          "fc-chat-item";


        item.innerHTML = `

          <div class="fc-avatar">

            ${escapeHTML(
              name
                .substring(0, 2)
                .toUpperCase()
            )}

          </div>


          <div class="fc-chat-info">

            <strong>
              ${escapeHTML(name)}
            </strong>

            <span>
              New conversation
            </span>

          </div>


          <small>
            Now
          </small>

        `;


        chatList.prepend(item);

      }
    );

  }


  // =====================================================
  // SHARE CURRENT PAGE
  // =====================================================

  const shareBtn =
    chatbox.querySelector(
      "#fc-share-current"
    );


  if (shareBtn) {

    shareBtn.addEventListener(
      "click",
      async () => {

        const currentURL =
          window.location.href;


        try {

          if (navigator.share) {

            await navigator.share({

              title:
                document.title,

              text:
                "Check this page",

              url:
                currentURL

            });

          } else {

            await navigator.clipboard.writeText(
              currentURL
            );


            alert(
              "Page link copied to clipboard!"
            );

          }

        } catch {

          console.log(
            "Share cancelled."
          );

        }

      }
    );

  }


  // =====================================================
  // ADD WEBSITE SHARE
  // =====================================================

  function addWebsiteShare(url) {

    const shareList =
      chatbox.querySelector(
        "#fc-share-list"
      );


    if (!shareList) {
      return;
    }


    const item =
      document.createElement("div");

    item.className =
      "fc-share-item";


    const icon =
      document.createElement("div");

    icon.className =
      "fc-share-icon";

    icon.textContent =
      "🔗";


    const info =
      document.createElement("div");


    const title =
      document.createElement("strong");

    title.textContent =
      "Shared Link";


    const link =
      document.createElement("a");

    link.href =
      url;

    link.target =
      "_blank";

    link.rel =
      "noopener noreferrer";

    link.textContent =
      url;


    info.appendChild(title);

    info.appendChild(link);

    item.appendChild(icon);

    item.appendChild(info);

    shareList.prepend(item);

  }


  // =====================================================
  // TOOLS
  // =====================================================

  const calcInput =
    chatbox.querySelector(
      "#fc-calc-input"
    );

  const calcBtn =
    chatbox.querySelector(
      "#fc-calc-btn"
    );

  const calcResult =
    chatbox.querySelector(
      "#fc-calc-result"
    );


  // =====================================================
  // CALCULATOR
  // =====================================================

  if (calcBtn) {

    calcBtn.addEventListener(
      "click",
      () => {

        const expression =
          calcInput.value.trim();


        if (!expression) {

          calcResult.textContent =
            "Please enter a calculation.";

          return;

        }


        try {

          // Allow only calculator characters

          if (
            !/^[0-9+\-*/().%\s]+$/.test(
              expression
            )
          ) {

            throw new Error(
              "Invalid characters"
            );

          }


          const result =
            Function(
              `"use strict"; return (${expression})`
            )();


          if (
            !Number.isFinite(result)
          ) {

            throw new Error(
              "Invalid result"
            );

          }


          calcResult.textContent =
            `Result: ${result}`;

        } catch {

          calcResult.textContent =
            "Invalid calculation.";

        }

      }
    );

  }


  // ENTER TO CALCULATE

  if (calcInput) {

    calcInput.addEventListener(
      "keydown",
      (e) => {

        if (e.key === "Enter") {

          e.preventDefault();

          calcBtn.click();

        }

      }
    );

  }


  // =====================================================
  // NOTEPAD
  // =====================================================

  const notepad =
    chatbox.querySelector(
      "#fc-notepad"
    );


  const saveNoteBtn =
    chatbox.querySelector(
      "#fc-save-note"
    );


  const clearNoteBtn =
    chatbox.querySelector(
      "#fc-clear-note"
    );


  // LOAD SAVED NOTE

  if (notepad) {

    chrome.storage.local.get(
      ["fc_notepad"],
      (data) => {

        if (data.fc_notepad) {

          notepad.value =
            data.fc_notepad;

        }

      }
    );

  }


  // SAVE NOTE

  if (saveNoteBtn) {

    saveNoteBtn.addEventListener(
      "click",
      () => {

        chrome.storage.local.set({

          fc_notepad:
            notepad.value

        });


        saveNoteBtn.textContent =
          "✅ Saved!";


        setTimeout(() => {

          saveNoteBtn.textContent =
            "💾 Save";

        }, 1200);

      }
    );

  }


  // CLEAR NOTE

  if (clearNoteBtn) {

    clearNoteBtn.addEventListener(
      "click",
      () => {

        notepad.value = "";

        chrome.storage.local.remove(
          "fc_notepad"
        );

      }
    );

  }


  // =====================================================
  // CURRENT PAGE INFORMATION
  // =====================================================

  const pageTitle =
    chatbox.querySelector(
      "#fc-page-title"
    );


  const pageURL =
    chatbox.querySelector(
      "#fc-page-url"
    );


  function updatePageInfo() {

    if (pageTitle) {

      pageTitle.textContent =
        document.title ||
        "Untitled Page";

    }


    if (pageURL) {

      pageURL.textContent =
        window.location.href;

    }

  }


  updatePageInfo();


  // =====================================================
  // COPY PAGE TITLE
  // =====================================================

  const copyTitleBtn =
    chatbox.querySelector(
      "#fc-copy-title"
    );


  if (copyTitleBtn) {

    copyTitleBtn.addEventListener(
      "click",
      async () => {

        try {

          await navigator.clipboard.writeText(
            document.title
          );


          copyTitleBtn.textContent =
            "✅ Copied!";


          setTimeout(() => {

            copyTitleBtn.textContent =
              "📋 Copy Title";

          }, 1200);

        } catch {

          alert(
            "Could not copy page title."
          );

        }

      }
    );

  }


  // =====================================================
  // COPY URL
  // =====================================================

  const copyURLBtn =
    chatbox.querySelector(
      "#fc-copy-url"
    );


  if (copyURLBtn) {

    copyURLBtn.addEventListener(
      "click",
      async () => {

        try {

          await navigator.clipboard.writeText(
            window.location.href
          );


          copyURLBtn.textContent =
            "✅ Copied!";


          setTimeout(() => {

            copyURLBtn.textContent =
              "🔗 Copy URL";

          }, 1200);

        } catch {

          alert(
            "Could not copy URL."
          );

        }

      }
    );

  }


  // =====================================================
  // DARK MODE
  // =====================================================

  const darkModeBtn =
    chatbox.querySelector(
      "#fc-dark-mode"
    );


  let fcDarkModeEnabled = false;


  if (darkModeBtn) {

    darkModeBtn.addEventListener(
      "click",
      () => {

        fcDarkModeEnabled =
          !fcDarkModeEnabled;


        if (fcDarkModeEnabled) {

          document.documentElement.style.filter =
            "invert(0.9) hue-rotate(180deg)";


          darkModeBtn.textContent =
            "☀️ Disable Dark Mode";

        } else {

          document.documentElement.style.filter =
            "";


          darkModeBtn.textContent =
            "🌙 Toggle Dark Mode";

        }

      }
    );

  }


  // =====================================================
  // RELOAD PAGE
  // =====================================================

  const reloadPageBtn =
    chatbox.querySelector(
      "#fc-reload-page"
    );


  if (reloadPageBtn) {

    reloadPageBtn.addEventListener(
      "click",
      () => {

        window.location.reload();

      }
    );

  }


  // =====================================================
  // SECURITY HELPER
  // =====================================================

  function escapeHTML(text) {

    const div =
      document.createElement("div");

    div.textContent =
      text;

    return div.innerHTML;

  }


  // =====================================================
  // BUTTON EVENTS
  // =====================================================

  btn.addEventListener(
    "click",
    toggleChat
  );


  closeBtn.addEventListener(
    "click",
    closeChat
  );


})();