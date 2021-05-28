import React from 'react';
import { Bar } from 'react-chartjs-2'

const BarChart=() => {
    return(
        <div>
            <div>
            <Bar
            data={{
                labels: ['9:00', '9:10', '9:20', '9:30', '9:40', '9:50'],
                datasets: [{
                    label: 'P1',
                    data: [2, 6, 7, 4, 4, 8],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.3)',
                        'rgba(54, 162, 235, 0.3)',
                        'rgba(255, 206, 86, 0.3)',
                        'rgba(75, 192, 192, 0.3)',
                        'rgba(153, 102, 255, 0.3)',
                        'rgba(255, 159, 64, 0.3)'
                    ],
                    borderWidth: 2,
                },
                
            ],
            }}
            height={400}
            width={600}
            options={{
                maintainAspectRatio:false,
            }}
            />
            </div>
            <div>
            <Bar
            data={{
                labels: ['9:00', '9:10', '9:20', '9:30', '9:40', '9:50'],
                datasets: [{
                    label: 'P2',
                    data: [4, 1, 9, 3, 7, 1],
                    backgroundColor: [
                        
                        'rgba(75, 192, 192, 0.3)',
                        'rgba(255, 99, 132, 0.3)',
                        'rgba(255, 206, 86, 0.3)',
                        'rgba(54, 162, 235, 0.3)',
                        'rgba(255, 159, 64, 0.3)',
                        'rgba(153, 102, 255, 0.3)'
                        
                    ],
                    borderWidth: 2,
                },
                
            ],
            }}
            height={400}
            width={600}
            options={{
                maintainAspectRatio:false,
            }}
            />
            </div>
            <div>
            <Bar
            data={{
                labels: ['9:00', '9:10', '9:20', '9:30', '9:40', '9:50'],
                datasets: [{
                    label: 'P3',
                    data: [6, 9, 2, 2, 8, 3],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.3)',
                        'rgba(255, 159, 64, 0.3)',
                        'rgba(255, 206, 86, 0.3)',
                        'rgba(255, 99, 132, 0.3)',
                        'rgba(153, 102, 255, 0.3)',
                        'rgba(75, 192, 192, 0.3)'
                       
                        
                    ],
                    borderWidth: 2,
                },
                
            ],
            }}
            height={400}
            width={600}
            options={{
                maintainAspectRatio:false,
            }}
            />
            </div>
        </div>
        
    );
}

export default BarChart