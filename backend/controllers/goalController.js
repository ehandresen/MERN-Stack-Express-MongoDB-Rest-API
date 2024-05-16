const goals = [
  {
    id: 1,
    text: 'goal 1',
  },
  {
    id: 2,
    text: 'goal 2',
  },
  {
    id: 3,
    text: 'goal 3',
  },
];

// @desc get all goals
// @route GET /api/goals
const getGoals = (req, res) => {
  res.status(200).json(goals);
};

export { getGoals };
