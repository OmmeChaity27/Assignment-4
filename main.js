let jobs = [
    {
        id: 1,
        companyName: "Mobile First Corp",
        position: "React Native Developer",
        location: "Remote",
        type: "Full-time",
        salary: "$130k - $175k",
        description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
        status: "All"
    },
    {
        id: 2,
        companyName: "WebFlow Agency",
        position: "Web Designer & Developer",
        location: "Los Angeles, CA",
        type: "Part-time",
        salary: "$80k - $120k",
        description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern design trends.",
        status: "All"
    },
    {
        id: 3,
        companyName: "DataViz Solutions",
        position: "Data Visualization Specialist",
        location: "Boston, MA",
        type: "Full-time",
        salary: "$125k - $165k",
        description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
        status: "All"
    },
    {
        id: 4,
        companyName: "CloudFirst Inc",
        position: "Backend Developer",
        location: "Seattle, WA",
        type: "Full-time", salary: "$140k - $190k",
        description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
        status: "All"
    },
    {
        id: 5,
        companyName: "Innovation Labs",
        position: "UI/UX Engineer",
        location: "Austin, TX",
        type: "Full-time",
        salary: "$110k - $150k",
        description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
        status: "All"
    },
    {
        id: 6,
        companyName: "MegaCorp Solutions",
        position: "JavaScript Developer",
        location: "New York, NY",
        type: "Full-time",
        salary: "$130k - $170k",
        description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
        status: "All"
    },
    {
        id: 7,
        companyName: "StartupXYZ",
        position: "Full Stack Engineer",
        location: "Remote",
        type: "Full-time",
        salary: "$120k - $160k",
        description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
        status: "All"
    },
    {
        id: 8,
        companyName: "TechCorp Industries",
        position: "Senior Frontend Developer",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$130k - $175k",
        description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
        status: "All"
    }
];

let activeTab = 'all';

function render() {
    const container = document.getElementById('jobs-container');
    const filteredJobs = jobs.filter(j => activeTab === 'all' || j.status === activeTab);

    // Update Dashboard Counts
    document.getElementById('total-count').innerText = jobs.length;
    document.getElementById('interview-count').innerText = jobs.filter(j => j.status === 'interview').length;
    document.getElementById('rejected-count').innerText = jobs.filter(j => j.status === 'rejected').length;
    document.getElementById('job-total-text').innerText = `${filteredJobs.length} jobs`;

    // Handle Empty State
    if (filteredJobs.length === 0) {
        container.innerHTML = `
            <div class="flex flex-col items-center justify-center py-20 bg-white rounded-xl border border-dashed border-slate-200">
                <img src="jobs.png" alt="No Jobs" class="w-24 mb-4 opacity-50">
                <h3 class="text-lg font-bold text-slate-700">No jobs Available</h3>
                <p class="text-slate-400 text-sm">There are currently no jobs in the ${activeTab} category.</p>
            </div>`;
        return;
    }

    // Render Cards
    container.innerHTML = filteredJobs.map(job => `
        <div class="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative group transition hover:shadow-md">
            <button onclick="deleteJob(${job.id})" class="absolute top-6 right-6 text-slate-300 hover:text-red-500 transition">
                <i data-lucide="trash-2" size="18"></i>
            </button>
            
            <h3 class="text-lg font-bold text-slate-800">${job.companyName}</h3>
            <p class="text-blue-500 text-sm font-semibold mb-2">${job.position}</p>
            
            <div class="flex flex-wrap gap-4 text-slate-400 text-xs font-medium mb-4">
                <span>${job.location}</span> . <span>${job.type}</span> . <span>${job.salary}</span>
            </div>

            <span class="inline-block px-2 py-1 rounded text-[10px] font-bold uppercase mb-4 ${getStatusStyle(job.status)}">
                ${job.status === 'none' ? 'NOT APPLIED' : job.status}
            </span>

            <p class="text-slate-500 text-sm mb-6 leading-relaxed">${job.description}</p>
            
            <div class="flex gap-3">
                <button onclick="toggleStatus(${job.id}, 'interview')" 
                    class="px-4 py-1.5 border border-emerald-400 text-emerald-500 rounded text-xs font-bold hover:bg-emerald-50 transition ${job.status === 'interview' ? 'bg-emerald-500 text-white hover:bg-emerald-600' : ''}">
                    INTERVIEW
                </button>
                <button onclick="toggleStatus(${job.id}, 'rejected')" 
                    class="px-4 py-1.5 border border-red-400 text-red-500 rounded text-xs font-bold hover:bg-red-50 transition ${job.status === 'rejected' ? 'bg-red-500 text-white hover:bg-red-600' : ''}">
                    REJECTED
                </button>
            </div>
        </div>
    `).join('');

    lucide.createIcons(); // Refresh icons after HTML change
}

// Utility to style status badges
function getStatusStyle(status) {
    if (status === 'interview') return 'bg-emerald-100 text-emerald-600';
    if (status === 'rejected') return 'bg-red-100 text-red-600';
    return 'bg-slate-100 text-slate-500';
}

// Action Functions
function toggleStatus(id, newStatus) {
    const job = jobs.find(j => j.id === id);
    job.status = (job.status === newStatus) ? 'none' : newStatus;
    render();
};

function deleteJob(id) {
    jobs = jobs.filter(j => j.id !== id);
    render();
};

function changeTab(tab) {
    activeTab = tab;
    // UI Update for Tab Buttons
    ['all', 'interview', 'rejected'].forEach(t => {
        const btn = document.getElementById(`tab-${t}`);
        if (t === tab) {
            btn.className = "px-4 py-1.5 rounded-md text-sm font-medium transition bg-blue-600 text-white";
        } else {
            btn.className = "px-4 py-1.5 rounded-md text-sm font-medium transition bg-white border text-slate-600 hover:bg-slate-50";
        }
    });
    render();
};

// Initial Render
render();