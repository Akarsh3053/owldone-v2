"use client";

import { useState } from 'react'
import ProjectHeader from '../(components)/ProjectHeader';
import BoardView from '../(components)/BoardView';
import ListView from '../(components)/ListView';
import TimelineView from '../(components)/TimelineView';
import TableView from '../(components)/TableView';

type Props = {
    params: { id: string };
}

const Projects = ({ params }: Props) => {
    const { id } = params;
    const [activeTab, setActiveTab] = useState("Board");
    const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

    return (
        <div>
            <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === "Board" && (
                <BoardView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
            )}
            {activeTab === "List" && (
                <ListView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
            )}
            {activeTab === "Timeline" && (
                <TimelineView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
            )}
            {activeTab === "Table" && (
                <TableView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
            )}
        </div>
    )
}

export default Projects;