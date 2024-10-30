import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await fetch('https://67217df698bbb4d93ca8885b.mockapi.io/Task');
  return response.json();
});


export const addTask = createAsyncThunk('tasks/addTask', async (taskText) => {
  const response = await fetch('https://67217df698bbb4d93ca8885b.mockapi.io/Task', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task: taskText }),
  });
  return response.json();
});

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export default taskSlice.reducer;
