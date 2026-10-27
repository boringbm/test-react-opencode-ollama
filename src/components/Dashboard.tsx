import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import '../Dashboard.css'

interface DashboardProps {
  onLogout: () => void
}

interface RevenueData {
  month: string
  revenue: number
  sales: number
}

const dashboardData: RevenueData[] = [
  { month: 'Jan', revenue: 4200, sales: 3200 },
  { month: 'Feb', revenue: 5100, sales: 4100 },
  { month: 'Mar', revenue: 4800, sales: 3800 },
  { month: 'Apr', revenue: 6200, sales: 5200 },
  { month: 'May', revenue: 5900, sales: 4900 },
  { month: 'Jun', revenue: 7400, sales: 6100 },
]

export default function Dashboard({ onLogout }: DashboardProps) {
  return (
    <div className="app-container">
      <div className="container py-5">
        {/* Header */}
        <div className="dashboard-header">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-3">
              <div
                className="dashboard-logo"
                style={{
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  borderRadius: 12,
                }}
              >
                <i className="bi bi-shield-lock fs-2 text-white" />
              </div>
              <div>
                <h1 className="text-white mb-0 dashboard-title">Dashboard</h1>
                <p className="text-white-50 small dashbadge">Welcome, Admin User</p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <i className="bi bi-person text-light fs-5" />
              <span className="text-light small">Admin User</span>
              <button
                type="button"
                className="btn btn-outline-light ms-2"
                onClick={onLogout}
              >
                <i className="bi bi-box-arrow-right" />
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="row g-4 DashboardCards">
          <StatCard
            className="stat-accent-1"
            icon="bi bi-currency-cny"
            label="Total Revenue"
            value="$66,000"
            trend="+12.5%"
          />
          <StatCard
            className="stat-accent-2"
            icon="bi bi-people"
            label="Users"
            value="1,243"
            trend="+8.2%"
          />
          <StatCard
            className="stat-accent-3"
            icon="bi bi-bar-chart"
            label="Active Sessions"
            value="3,890"
            trend="+5.7%"
          />
        </div>

        {/* Dashboard body */}
        <div className="row g-4 DashboardBody">
          {/* Chart */}
          <div className="col-lg-8">
            <div className="card dashboard-card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4 className="card-title">Monthly Revenue &amp; Sales</h4>
                <span className="badge bg-info-subtle text-info border">Chart</span>
              </div>
              <div className="card-body">
                <div className="chart-wrapper" style={{ height: 340 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={dashboardData}
                      margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#e9ecef" />
                      <XAxis dataKey="month" stroke="#6c757d" fontSize={13} />
                      <YAxis stroke="#6c757d" fontSize={13} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#ffffff',
                          border: '1px solid #dee2e6',
                          borderRadius: '8px',
                          color: '#343a40',
                        }}
                      />
                      <Bar
                        dataKey="revenue"
                        name="Revenue"
                        fill="#667eea"
                        radius={[6, 6, 0, 0]}
                      />
                      <Bar
                        dataKey="sales"
                        name="Sales"
                        fill="#f59e0b"
                        radius={[6, 6, 0, 0]}
                        spacing={4}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="col-lg-4">
            <div className="card dashboard-card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4 className="card-title">Recent Activity</h4>
                <span className="badge bg-success-subtle text-success border">Table</span>
              </div>
              <div className="card-body p-0">
                <DataTable />
              </div>
            </div>

            {/* Quick tip overlay (styling only) */}
            <div className="col-lg-12 d-none d-sm-block">
              <div className="card dashboard-card stat-card-overlay">
                <div className="card-body">
                  <div className="row align-items-center g-3">
                    <div
                      className="col-6 stat-icon"
                      style={{ background: 'linear-gradient(135deg, #ff9a9e, #fad0c4)' }}
                    >
                      <i className="bi bi-info-circle text-white fs-4" />
                    </div>
                    <div className="col-6">
                      <h6 className="stat-label">Quick Tip</h6>
                      <p className="text-muted small">
                        Use your unique credentials to access all features of the dashboard.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay (styling only) */}
      <div className="overlay-back">
      </div>
    </div>
  )
}

/* -------------------- Sub-components -------------------- */

interface StatCardProps {
  className: string
  icon: string
  label: string
  value: string
  trend: string
}

function StatCard({ className, icon, label, value, trend }: StatCardProps) {
  return (
    <div className={`stat-card gradient-${className} border border-light`}>
      <div className="stat-card-top">
        <div className="stat-icon-wrap">
          <i className={`bi ${icon} fs-3`} />
        </div>
        <span className="text-muted small">{trend}</span>
      </div>
      <div className="stat-card-value text-white">{value}</div>
      <h5 className="stat-card-label text-white">{label}</h5>
    </div>
  )
}

/* -------------------- DataTable -------------------- */

const activityRows: (Record<string, string | number>)[] = [
  { id: 1, user: 'Alice Johnson', action: 'updated profile', time: '2 min ago', status: 'success' },
  { id: 2, user: 'Bob Smith', action: 'reported issue', time: '15 min ago', status: 'warning' },
  { id: 3, user: 'Carol Lee', action: 'ordered product', time: '1 hour ago', status: 'success' },
  { id: 4, user: 'David Wang', action: 'updated settings', time: '2 hours ago', status: 'success' },
  { id: 5, user: 'Eva Garcia', action: 'requested support', time: '3 hours ago', status: 'info' },
]

function DataTable() {
  return (
    <div className="dt-responsive dt-report">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">User</th>
          <th scope="col">Action</th>
          <th scope="col">Time</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {activityRows.map((row, index) => (
          <tr key={row.id}>
            <td>{index + 1}</td>
            <td>{row.user}</td>
            <td>{row.action}</td>
            <td className="text-muted">{row.time}</td>
            <td>
              <span
                className={`status-badge ${
                  (row.status as string)
                    .toLowerCase() === 'success'
                      ? 'status-success'
                      : (row.status as string)
                          .toLowerCase() === 'warning'
                            ? 'status-warning'
                            : (row.status as string)
                                .toLowerCase() === 'info'
                                  ? 'status-info'
                                  : 'status-success'
                }`}
              >
                {(row.status as string).toUpperCase()}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </div>
  )
}
