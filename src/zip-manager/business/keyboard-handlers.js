function getKeyUpHandler({
  highlightedEntry,
  selectedFolder,
  disabledCutEntry,
  disabledCopyEntry,
  disabledRenameEntry,
  disabledPasteEntry,
  disabledDeleteEntry,
  disabledHistoryBack,
  disabledHistoryForward,
  disabledExportZip,
  cutEntry,
  copyEntry,
  renameEntry,
  pasteEntry,
  deleteEntry,
  enterEntry,
  highlightNextEntry,
  highlightPreviousEntry,
  highlightPreviousPageEntry,
  highlightNextPageEntry,
  highlightFirstEntry,
  highlightLastEntry,
  createFolder,
  exportZipFile,
  navigateHistoryBack,
  navigateHistoryForward,
  addFilesButton,
  importZipButton,
  constants
}) {
  const {
    ACTION_KEY,
    CUT_KEY,
    COPY_KEY,
    RENAME_KEY,
    PASTE_KEY,
    CREATE_FOLDER_KEY,
    ADD_FILES_KEY,
    IMPORT_ZIP_KEY,
    EXPORT_ZIP_KEY,
    DELETE_KEYS,
    DOWN_KEY,
    UP_KEY,
    PAGE_UP_KEY,
    PAGE_DOWN_KEY,
    HOME_KEY,
    END_KEY,
    NAVIGATION_BACK_KEY,
    NAVIGATION_FORWARD_KEY
  } = constants;

  function handleKeyUp(event) {
    onEntriesNavigationKeyUp({
      event,
      highlightNextEntry,
      highlightPreviousEntry,
      highlightPreviousPageEntry,
      highlightNextPageEntry,
      highlightFirstEntry,
      highlightLastEntry
    });
    onFolderNavigationKeyUp({
      event,
      navigateHistoryBack,
      navigateHistoryForward,
      disabledHistoryBack,
      disabledHistoryForward
    });
    onHighlightedEntryKeyUp({
      event,
      cutEntry,
      copyEntry,
      renameEntry,
      pasteEntry,
      deleteEntry,
      enterEntry,
      disabledCutEntry,
      disabledCopyEntry,
      disabledRenameEntry,
      disabledPasteEntry,
      disabledDeleteEntry
    });
    onSelectedFolderKeyUp({
      event,
      createFolder,
      exportZipFile,
      addFilesButton,
      importZipButton,
      disabledExportZip
    });
  }

  function onEntriesNavigationKeyUp({
    event,
    highlightPreviousEntry,
    highlightNextEntry,
    highlightPreviousPageEntry,
    highlightNextPageEntry,
    highlightFirstEntry,
    highlightLastEntry
  }) {
    if (event.key === DOWN_KEY) {
      highlightNextEntry();
    }
    if (event.key === UP_KEY) {
      highlightPreviousEntry();
    }
    if (event.key === HOME_KEY) {
      highlightFirstEntry();
    }
    if (event.key === END_KEY) {
      highlightLastEntry();
    }
    if (event.key === PAGE_UP_KEY) {
      highlightPreviousPageEntry();
    }
    if (event.key === PAGE_DOWN_KEY) {
      highlightNextPageEntry();
    }
    if (event.key === HOME_KEY) {
      highlightFirstEntry();
    }
    if (event.key === END_KEY) {
      highlightLastEntry();
    }
  }

  function onFolderNavigationKeyUp({
    event,
    navigateHistoryBack,
    navigateHistoryForward,
    disabledHistoryBack,
    disabledHistoryForward
  }) {
    if (event.altKey) {
      if (event.key === NAVIGATION_BACK_KEY && !disabledHistoryBack) {
        navigateHistoryBack();
      }
      if (event.key === NAVIGATION_FORWARD_KEY && !disabledHistoryForward) {
        navigateHistoryForward();
      }
    }
  }

  function onHighlightedEntryKeyUp({
    event,
    disabledCutEntry,
    disabledCopyEntry,
    disabledRenameEntry,
    disabledPasteEntry,
    disabledDeleteEntry,
    cutEntry,
    copyEntry,
    renameEntry,
    pasteEntry,
    deleteEntry,
    enterEntry
  }) {
    if (event.ctrlKey) {
      if (event.key === CUT_KEY && !disabledCutEntry) {
        cutEntry();
      }
      if (event.key === COPY_KEY && !disabledCopyEntry) {
        copyEntry();
      }
      if (event.key === RENAME_KEY && !disabledRenameEntry) {
        renameEntry();
      }
      if (event.key === PASTE_KEY && !disabledPasteEntry) {
        pasteEntry();
      }
    }
    if (DELETE_KEYS.includes(event.key) && !disabledDeleteEntry) {
      deleteEntry();
    }
    if (event.key === ACTION_KEY) {
      enterEntry(highlightedEntry, selectedFolder);
    }
  }

  function onSelectedFolderKeyUp({
    event,
    createFolder,
    exportZipFile,
    addFilesButton,
    importZipButton,
    disabledExportZip
  }) {
    if (event.ctrlKey) {
      if (event.key === CREATE_FOLDER_KEY) {
        createFolder();
      }
      if (event.key === ADD_FILES_KEY) {
        addFilesButton.click();
      }
      if (event.key === IMPORT_ZIP_KEY) {
        importZipButton.click();
      }
      if (event.key === EXPORT_ZIP_KEY && !disabledExportZip) {
        exportZipFile();
      }
    }
  }

  return {
    handleKeyUp
  };
}

export { getKeyUpHandler };