<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="default_controlller")
     */
    public function index()
    {
        return $this->render('default_controlller/index.html.twig', [
            'controller_name' => 'DefaultControlllerController',
        ]);
    }
}
