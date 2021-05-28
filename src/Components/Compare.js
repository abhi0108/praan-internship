import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const Doughnutchart=() => {
    return(
        <div>
            <div>
            <Doughnut
            data={{
                labels: ['P3 at 9:10', 'P2 at 9:20','P1 at 9:50'],
                datasets: [{
                    label: 'P1',
                    data: [90,90,80],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.3)',
                        'rgba(54, 162, 235, 0.3)',
                        'rgba(255, 206, 86, 0.3)',
                        'rgba(75, 192, 192, 0.3)',
                        'rgba(153, 102, 255, 0.3)',
                        'rgba(255, 159, 64, 0.3)'
                    ],
                    
                },
                
            ],
            }}
            height={400}
            //width={600}
            options={{
                maintainAspectRatio:false,
            }}
            />
            </div>
        </div>
            
    );
}

export default Doughnutchart;