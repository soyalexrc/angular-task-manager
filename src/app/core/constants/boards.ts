const RECENTLY_VIEWED = [
  {
    title: 'Board 1',
    color: 'green',
    id: 'board-01',
    idWorkspace: 'workspace-01'
  },
  {
    title: 'Board 2',
    color: 'orange',
    id: 'board-02',
    idWorkspace: 'workspace-02'
  }
]

const WORKSPACES = [
  {
    id: 'workspace-01',
    title: 'Workspace-1',
    boards: [
      {
        title: 'Board 1',
        color: 'green',
        id: 'board-01',
        idWorkspace: 'workspace-01'
      },
      {
        title: 'Board 2',
        color: 'orange',
        id: 'board-02',
        idWorkspace: 'workspace-01'
      }
    ]
  },
  {
    id: 'workspace-02',
    title: 'Workspace-2',
    boards: [
      {
        title: 'Board 1',
        color: 'green',
        id: 'board-01',
        idWorkspace: 'workspace-02'
      }
    ]
  }
]

const GUEST_WORKSPACES = [
  {
    id: 'workspace-03',
    title: 'Workspace-3',
    boards: [
      {
        title: 'Board 1',
        id: 'board-01',
      },
      {
        title: 'Board 2',
        id: 'board-02'
      }
    ]
  }
]

export {
  GUEST_WORKSPACES,
  WORKSPACES,
  RECENTLY_VIEWED
}
