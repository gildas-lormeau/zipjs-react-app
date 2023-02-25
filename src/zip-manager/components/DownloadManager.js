import "./styles/DownloadManager.css";

let ENTER_KEY;

function DownloadManager({
  downloads,
  downloaderRef,
  onDeleteDownloadEntry,
  constants
}) {
  ({ ENTER_KEY } = constants);

  return (
    <div className="downloads">
      <ol>
        {downloads.map((download) => (
          <li key={download.id}>
            <DownloadEntry
              download={download}
              onDeleteDownloadEntry={onDeleteDownloadEntry}
            />
          </li>
        ))}
      </ol>
      <a hidden ref={downloaderRef} />
    </div>
  );
}

function DownloadEntry({ download, onDeleteDownloadEntry }) {
  return (
    <>
      <DownloadEntryInfo
        download={download}
        onDeleteDownloadEntry={onDeleteDownloadEntry}
      />
      <DownloadEntryProgress download={download} />
    </>
  );
}

function DownloadEntryInfo({ download, onDeleteDownloadEntry }) {
  return (
    <div className="download-entry">
      <span className="list-item-name download-entry-name">
        {download.name}
      </span>
      <DeleteDownloadEntryButton
        download={download}
        onDeleteDownloadEntry={onDeleteDownloadEntry}
      />
    </div>
  );
}

function DeleteDownloadEntryButton({ download, onDeleteDownloadEntry }) {
  function handleClick() {
    onDeleteDownloadEntry(download);
  }

  function handleKeyUp(event) {
    if (event.key === ENTER_KEY) {
      handleClick();
    }
  }

  return (
    <span
      className="list-item-button"
      onClick={handleClick}
      onKeyUp={handleKeyUp}
      tabIndex={0}
    >
      ✕
    </span>
  );
}

function DownloadEntryProgress({ download }) {
  return <progress value={download.progressValue} max={download.progressMax} />;
}

export default DownloadManager;